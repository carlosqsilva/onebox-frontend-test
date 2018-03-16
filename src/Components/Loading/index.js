import { h } from "preact"

const Loading = ({ response }) => (
  <div class="column has-text-centered">
    <div class="spinner">
      <div class="bounce1" />
      <div class="bounce2" />
    </div>
    <p>{response ? response : "Waiting API Response."}</p>
  </div>
)

export default Loading
