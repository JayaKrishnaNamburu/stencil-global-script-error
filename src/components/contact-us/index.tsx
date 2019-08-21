import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-contact-page',
  shadow: true,
})
export class ContactPage {
  render() {
    return (
      <div>
        <app-navbar />
        <app-contact-form />
      </div>
    )
  }
}
