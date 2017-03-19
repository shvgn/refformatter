import React, {Component} from 'react'

class Reference extends Component {
  render () {
    const {title, author, volume, page, issue, issued} = this.props
    const doi = this.props.DOI

    const issuedParts = issued['date-parts'][0]
    const issuedDate = new Date(issuedParts[0], issuedParts[1] - 1, issuedParts[2])

    // Journal title
    const shortContainerTitle = this.props['short-container-title']
    const upDisabled = (this.props.moveUp === null)
    const downDisabled = (this.props.moveDown === null)

    return (
      <div>
        <div style={{fontWeight: 500, marginBottom: '0.3rem'}}>
          {title}
        </div>

        <div style={{fontSize: 'smaller', marginBottom: '0.3rem'}}>
          {author
            .map(a => `${a.given} ${a.family}`)
            .map((a, i) => (
              <span style={{whiteSpace: 'nowrap'}} key={a}>
                {a}{ (i < author.length - 1) ? ', ' : '' }
              </span>
            ))
          }
        </div>

        <div style={{fontSize: 'smaller'}}>
          <span style={{marginRight: '1em', whiteSpace: 'nowrap'}}>
            {shortContainerTitle} <b>{volume}</b> {issue}, pp. {page}
          </span>

          <span style={{marginRight: '1em', whiteSpace: 'nowrap'}}>
            Issued: {issuedDate.toLocaleDateString()}
          </span>

          <span style={{marginRight: '1em', whiteSpace: 'nowrap'}}>
            DOI: {doi}
          </span>
        </div>

        <div style={{fontSize: 'larger', marginTop: '0.3rem'}}>
          <input
            type='button'
            value='↓ Move Down'
            disabled={downDisabled}
            onClick={() => this.props.moveDown(doi)}
            style={{marginRight: '1em'}}
          />

          <input
            type='button'
            value='↑ Move Up'
            disabled={upDisabled}
            onClick={() => this.props.moveUp(doi)}
            style={{marginRight: '1em'}}
          />

          <input
            type='button'
            value='× Delete'
            onClick={() => this.props.delete(doi)}
            style={{marginRight: '1em'}}
          />
        </div>
      </div>
    )
  }
}

export default Reference
