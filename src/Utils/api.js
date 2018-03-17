export default class Api {
  startURL = "https://dry-plateau-42363.herokuapp.com/web"
  dataURL = `${this.startURL}/bottles/getinfos`

  handleErrors(response) {
    if (response.type === "opaque") {
      return response
    } else if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  }

  start() {
    return fetch(this.startURL, { mode: "no-cors" })
      .then(this.handleErrors)
      .then(resp => resp.text())
  }

  getData() {
    return fetch(this.dataURL)
      .then(this.handleErrors)
      .then(resp => resp.json())
  }
}
