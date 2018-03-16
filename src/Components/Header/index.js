import { h, Component } from "preact"
import logo from "./logo.png"

class Header extends Component {
  state = {
    active: false
  }

  toggle = e => {
    this.setState({ active: !this.state.active })
  }

  render(_, { active }) {
    return (
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src={logo} alt="Logo" />
              </a>
              <span
                class={`navbar-burger burger ${active && "is-active"}`}
                data-target="navbarMenuHeroA"
                onClick={this.toggle}
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div
              id="navbarMenuHeroA"
              class={`navbar-menu ${active && "is-active"}`}
            >
              <div class="navbar-end">
                <span class="navbar-item">
                  <a
                    class="button is-light"
                    href="https://github.com/carlosqsilva/onebox-frontend-test"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Github</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
