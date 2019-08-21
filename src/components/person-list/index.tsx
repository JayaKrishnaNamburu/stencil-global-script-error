import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-person-list',
  shadow: true,
  styleUrls: ['style.css'],
})
export class PersonList {
  render() {
    return (
      <div class="wrapper">
        {[
          {
            name: 'Alice',
            flag: '\uD83C\uDDE9\uD83C\uDDEA',
            displayLink: '@alicecodes',
            url: 'https://picsum.photos/150?v=alice',
          },
          {
            name: 'Bob',
            displayLink: '@bobthebest',
            url: 'https://picsum.photos/150?v=bob',
          },
          {
            name: 'Carol',
            flag: '\uD83C\uDDE8\uD83C\uDDF1',
            displayLink: '@oh.carol',
            url: 'https://picsum.photos/150?v=carol',
          },
        ].map((person, index) => (
          <app-person-spotlight
            name={person.name}
            flag={person.flag}
            displayLink={person.displayLink}
            url={person.url}
            key={index}
          />
        ))}
      </div>
    )
  }
}
