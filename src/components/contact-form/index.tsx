import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-contact-form',
  shadow: true,
  styleUrls: ['style.css'],
})
export class ContactForm {
  render() {
    return (
      <form method="get" action="/" class="form">
        <div class="name-group">
          <label htmlFor="name" class="label">
            Name:
          </label>
          <input type="text" id="name" name="name" class="textinput" />
        </div>
        <div class="email-group">
          <label htmlFor="email" class="label1">
            Email:
          </label>
          <input type="email" id="email" name="email" class="textinput1" />
        </div>
        <div class="message-group">
          <label htmlFor="message" class="message-label">
            Message:
          </label>
          <textarea rows={8} cols={30} id="message" name="message" class="textarea" />
        </div>
        <button class="button">Send</button>
      </form>
    )
  }
}
