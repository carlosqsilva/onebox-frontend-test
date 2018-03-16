import { h, Component } from "preact"
import icon from "./icon.png"

class Notify extends Component {
  componentDidMount() {
    if (window.Notification && Notification.permission !== "granted") {
      Notification.requestPermission(status => {
        if (Notification.permission !== status) {
          Notification.permission = status
        }
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (window.Notification && Notification.permission === "granted") {
      const { data } = nextProps
      const list = data
        .filter(beer => {
          const { current_temp, minimum_temp, maximum_temp } = beer
          return current_temp < minimum_temp || current_temp > maximum_temp
        })
        .map(beer => beer.type)

      if (list.length > 0) {
        const message = new Notification("Incorrect temperature:", {
          body: `${list.join(", ")}`,
          icon
        })
        setTimeout(() => message.close(), 4000)
      }
    }
  }

  render({ message }) {
    if (message) {
      return <div class="c-notification is-danger">{message}</div>
    }
    return null
  }
}

export default Notify
