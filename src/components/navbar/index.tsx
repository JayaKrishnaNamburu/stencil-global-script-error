import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-navbar',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Navbar {
  render() {
    return (
      <nav class="nav">
        <ul class="list-container">
          <li class="home-link">
            <stencil-route-link url="/">Home</stencil-route-link>
          </li>
          <li class="team-link">
            <stencil-route-link url="/team">Team</stencil-route-link>
          </li>
          <li class="contact-link">
            <stencil-route-link url="/contact-us">Contact Us</stencil-route-link>
          </li>
        </ul>
      </nav>
    )
  }
}
