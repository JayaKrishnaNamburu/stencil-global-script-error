import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'app-person-spotlight',
  shadow: true,
  styleUrls: ['style.css'],
})
export class PersonSpotlight {
  @Prop()
  name: string = 'John Doe'
  @Prop()
  url: string = 'http://lorempixel.com/150/150/'
  @Prop()
  flag: string = '\uD83C\uDDF7\uD83C\uDDF4'
  @Prop()
  link: string = 'https://twitter.com/teleportHQio'
  @Prop()
  displayLink: string = '@teleportHQ'
  @Prop()
  bio: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  render() {
    return (
      <div class="container">
        <img src={this.url} class="image" />
        <p class="textblock">
          <span class="text">{this.flag}</span>
          {this.name}
        </p>
        <p class="textblock1">
          <a href={this.link} target="_blank" class="link">
            {this.displayLink}
          </a>
        </p>
        <p>{this.bio}</p>
      </div>
    )
  }
}
