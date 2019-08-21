import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-team',
  shadow: true,
})
export class Team {
  render() {
    return (
      <div>
        <app-navbar />
        <app-person-list />
      </div>
    )
  }
}
