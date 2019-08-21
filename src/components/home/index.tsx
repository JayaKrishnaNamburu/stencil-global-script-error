import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-home',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Home {
  render() {
    return (
      <div>
        <app-navbar />
        <main class="main">
          <img src="http://lorempixel.com/960/200/" alt="Main banner on the home page" />
          <h1 class="heading1">Welcome to the teleportHQ sample website!</h1>
          <p class="textblock">
            Building the infrastructure for the next generation of web and mobile interfaces
          </p>
          <p>
            <a
              href="https://docs.teleporthq.io/guides/getting-started.html"
              target="_blank"
              class="link"
            >
              Get Started →
            </a>
          </p>
          <div class="columns">
            <div class="container1">
              <h2>Platform Independent</h2>
              <p>
                Using the same UI representation, you can build modern Web & Mobile applications.
              </p>
            </div>
            <div class="container2">
              <h2>Plugable Architecture</h2>
              <p>
                Our plugin system allows you to customize your exported code to the last detail.
              </p>
            </div>
            <div class="container3">
              <h2>An Open Community</h2>
              <p>
                We open-sourced our entire ecosystem and we invite everyone to contribute to it!
              </p>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
