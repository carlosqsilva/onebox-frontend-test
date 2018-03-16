import { h, Component } from "preact"
import Chartist from "chartist"
import { options } from "./options"

class Chart extends Component {
  points = []

  componentDidMount() {
    const data = this.createData(this.props)
    this.chart = new Chartist.Line(this.target, data, options)
  }

  componentWillReceiveProps(nextProps) {
    const data = this.createData(nextProps)
    this.chart.update(data)
  }

  createData = props => {
    const { minimum_temp, maximum_temp, current_temp, num } = props
    this.points.push(current_temp)

    if (this.points.length > num) {
      this.points = this.points.slice(1, num + 1)
    }

    const UpperLimit = Array(num).fill(minimum_temp)
    const LowerLimit = Array(num).fill(maximum_temp)

    const data = {
      series: [
        { name: "upper", data: UpperLimit },
        { name: "lower", data: LowerLimit },
        { name: "live", data: this.points }
      ]
    }
    return data
  }

  render({ type, minimum_temp, maximum_temp, current_temp }) {
    const alarm = current_temp < minimum_temp || current_temp > maximum_temp
    return (
      <div class="column is-4">
        <div class="box" style={alarm && { background: "hsl(348, 100%, 90%)" }}>
          <p class="title is-5 has-text-black-bis">{type}</p>
          <div
            class="ct-chart .ct-majot-seventh"
            ref={e => (this.target = e)}
          />
        </div>
      </div>
    )
  }
}

export default Chart
