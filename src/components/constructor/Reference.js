import React, {Component} from 'react'

class Reference extends Component {
  render () {
    const {title, author, volume, page, issue, issued} = this.props
    console.log('author', author)

    // Journal title
    const shortContainerTitle = this.props['short-container-title']

    return (
      <div>
        <div>
          {title}
        </div>
        <div>
          {author.map(a => `${a.given} ${a.family}`).join(', ')}
        </div>
        <div>
          {shortContainerTitle}
          <b>{volume}</b> {issue}, pp. {page},
        Issued {issued['date-parts'][0].join('-')}
        </div>
      </div>
    )
  }
}

export default Reference
