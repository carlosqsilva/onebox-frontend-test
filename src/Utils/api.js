export default class Api {
  startURL = "https://dry-plateau-42363.herokuapp.com/web"
  dataURL = `${this.startURL}/bottles/getinfos`

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  }

  start() {
    return fetch(this.startURL)
      .then(this.handleErrors)
      .then(resp => resp.text())
  }

  getData() {
    return fetch(this.dataURL)
      .then(this.handleErrors)
      .then(resp => resp.json())
  }
}
