import React, {Component} from 'react'
import {dateFromParts} from '../../helpers'

class Reference extends Component {
  render () {
    const {title, author, volume, page, issue, issued} = this.props
    const doi = this.props.DOI
    const issuedDate = dateFromParts(issued['date-parts'][0])

    // Journal title
    const shortContainerTitle = this.props['short-container-title']

    // The availability of buttons
    const upDisabled = (this.props.moveUp === null)
    const downDisabled = (this.props.moveDown === null)

    return (
      <div>
        <div style={{fontWeight: 500, marginBottom: '0.5rem'}}>
          {title}
        </div>

        <div style={{fontSize: 'smaller', marginBottom: '0.5rem'}}>
          {author
            .map(a => `${a.given} ${a.family}`)
            .map(a => (<span style={{whiteSpace: 'nowrap'}} key={a}>{a}</span>))
            .reduce((acc, elem) => {
              return (acc === null) ? [elem] : [...acc, ', ', elem]
            }, null)
          }
        </div>

        <div style={{fontSize: 'smaller'}}>
          <span style={{marginRight: '1em', whiteSpace: 'nowrap'}}>
            {shortContainerTitle} <b>{volume}</b>, {issue}
            {page ? ', pp. ' + page : ''}
          </span>

          <span style={{marginRight: '1em', whiteSpace: 'nowrap'}}>
            Issued: {issuedDate}
          </span>

          <span style={{marginRight: '1em', whiteSpace: 'nowrap'}}>
            DOI: <a href={`https://doi.org/${doi}`}>{doi}</a>
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
