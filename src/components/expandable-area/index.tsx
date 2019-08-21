import { Component, h, Prop, State } from '@stencil/core'

@Component({
  tag: 'app-expandable-area',
  shadow: true,
  styleUrls: ['style.css'],
})
export class ExpandableArea {
  @Prop()
  title: string = 'This whole area is clickable!'
  @Prop()
  expandableHeight: string = '100px'
  @State()
  isExpanded: boolean = false

  render() {
    return (
      <div class="container">
        <div onClick={() => (this.isExpanded = !this.isExpanded)} class="clickable-area">
          <span class="text">{this.title}</span>
          <span class="button">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <line x1="15" y1="7.5" x2="0" y2="7.5" stroke="#000" />
              {!this.isExpanded && <line x1="7.5" y1="0" x2="7.5" y2="15" stroke="#000" />}
            </svg>
          </span>
        </div>
        <div data-is-expanded={this.isExpanded} class="collapsible-area">
          <slot />
        </div>
      </div>
    )
  }
}
