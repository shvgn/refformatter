import React, {Component} from 'react'
import Reference from './Reference'

class RefList extends Component {
  render () {
    const {references} = this.props
    const len = references.length

    return (
      <ol>
        {references.map((r, i) => (
          <li key={r.DOI} style={{marginBottom: '1.5rem'}}>
            <Reference
              {...r}
              delete={this.props.deleteReference}
              moveUp={(i > 0) ? this.props.moveReferenceUp : null}
              moveDown={(i < len - 1) ? this.props.moveReferenceDown : null}
            />
          </li>))}
      </ol>
    )
  }
}

export default RefList
