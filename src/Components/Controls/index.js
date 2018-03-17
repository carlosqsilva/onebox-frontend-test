import { h } from "preact"

const Controls = ({ onChange }) => (
  <div class="level is-mobile">
    <div class="level-left">
      <div class="level-item">
        <div class="field">
          <label class="label has-text-white-bis">Frequency</label>
          <div class="control">
            <div class="select">
              <select onChange={onChange} name="frequency">
                <option value={5000}>5 seconds</option>
                <option value={10000}>10 seconds</option>
                <option value={15000}>15 seconds</option>
                <option value={20000}>20 seconds</option>
                <option value={25000}>25 seconds</option>
                <option value={30000}>30 seconds</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label has-text-white-bis">Points</label>
        <div class="control">
          <div class="select">
            <select onChange={onChange} name="points">
              <option value={5}>5 Points</option>
              <option value={10}>10 Points</option>
              <option value={15}>15 Points</option>
              <option value={20}>20 Points</option>
              <option value={25}>25 Points</option>
              <option value={30}>30 Points</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Controls
