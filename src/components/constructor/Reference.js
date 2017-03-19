import React, {Component} from 'react'
import {dateFromParts} from '../../helpers'

class Reference extends Component {
  render () {
    // Journal title
    const shortContainerTitle = this.props['short-container-title'][0] || this.props['container-title'][0]

    const {title, author, volume, page, issue, issued} = this.props
    const doi = this.props.DOI
    const issuedDate = dateFromParts(issued['date-parts'][0])
    const metaStyle = {marginRight: '1em', whiteSpace: 'nowrap'}

    // The availability of buttons
    const upDisabled = (this.props.moveUp === null)
    const downDisabled = (this.props.moveDown === null)
    const buttonStyle = {
      marginRight: '1em',
      fontSize: '0.9rem'
    }

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
          {(shortContainerTitle)
          ? <span style={metaStyle}>
            {shortContainerTitle} <b>{volume}</b>
            {issue ? ', ' + issue : ''}
            {page ? ', pp. ' + page : ''}
          </span>
           : ''}

          <span style={metaStyle}>
            Issued: {issuedDate}
          </span>

          <span style={Object.assign({}, metaStyle, {marginRight: 0})}>
            DOI: <a href={`https://doi.org/${doi}`}>{doi}</a>
          </span>
        </div>

        <div style={{marginTop: '0.3rem'}}>
          <input
            type='button'
            value='↓ Move Down'
            disabled={downDisabled}
            onClick={() => this.props.moveDown(doi)}
            style={buttonStyle}
          />

          <input
            type='button'
            value='↑ Move Up'
            disabled={upDisabled}
            onClick={() => this.props.moveUp(doi)}
            style={buttonStyle}
          />

          <input
            type='button'
            value='× Delete'
            onClick={() => this.props.delete(doi)}
            style={buttonStyle}
          />
        </div>
      </div>
    )
  }
}

export default Reference
