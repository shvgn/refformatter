import React, {Component} from 'react'

class Reference extends Component {
  render () {
    const {title, author, volume, page, issue, issued} = this.props
    const doi = this.props.DOI

    const issuedParts = issued['date-parts'][0]
    const issuedDate = new Date(issuedParts[0], issuedParts[1] - 1, issuedParts[2], )

    // Journal title
    const shortContainerTitle = this.props['short-container-title']

    return (
      <div>
        <div style={{fontWeight: 500}}>
          {title}
        </div>

        <div>
          {author.map(a => `${a.given} ${a.family}`).join(', ')}
        </div>

        <div>
          <span style={{marginRight: '1em'}}>
            {shortContainerTitle} <b>{volume}</b> {issue}, pp. {page}
          </span>
          <span style={{marginRight: '1em'}}>
            Issued {issuedDate.toLocaleDateString()}
          </span>
          <span style={{marginRight: '1em'}}>
            DOI: {doi}
          </span>
        </div>

        <div>
          <input
            type='button'
            value='Delete'
            onClick={() => this.props.delete(doi)}
          />
        </div>
      </div>
    )
  }
}

export default Reference
