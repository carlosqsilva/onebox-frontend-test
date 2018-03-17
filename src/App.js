import { h, Component } from "preact"
import { Chart, Controls, Loading, Notification, Header } from "./Components"
import Api from "./Utils/api"

const API = new Api()

class App extends Component {
  timer = null
  state = {
    frequency: 5000,
    points: 5,
    loading: true,
    response: null,
    error: null,
    data: []
  }

  componentDidMount() {
    API.start()
      .then(resp => this.setState({ response: "Loading initial data..." }))
      .then(_ => API.getData())
      .then(data => this.setState({ data, loading: false }))
      .then(_ => this.updateData())
      .catch(err => this.setState({ response: "Error" }))
  }

  updateData = () => {
    const { frequency } = this.state
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      API.getData()
        .then(data => this.setState({ data, error: null }))
        .then(_ => this.updateData())
        .catch(err => {
          this.setState({ error: `You are disconnected: \n ${err.message}` })
          this.updateData()
        })
    }, frequency)
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value * 1 })
  }

  render(_, { loading, response, data, points, error }) {
    return (
      <section class="hero is-fullheight is-dark">
        <Header />
        <div class="hero-body">
          <div class="container">
            {!loading && <Controls onChange={this.onChange} />}
            <div class="columns is-multiline">
              {loading ? (
                <Loading response={response} />
              ) : (
                data.map(beer => (
                  <Chart key={beer.type} points={points} {...beer} />
                ))
              )}
            </div>
          </div>
          <Notification message={error} data={data} />
        </div>
      </section>
    )
  }
}

export default App
