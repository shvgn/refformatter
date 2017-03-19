import React, {Component} from 'react'
import Reference from './Reference'

class RefList extends Component {
  render () {
    const {references} = this.props
    return (
      <ol>
        {references.map(r => (
          <li key={r.DOI}>
            <Reference
              {...r}
              delete={this.props.deleteReference}
            />
          </li>))}
      </ol>
    )
  }
}

export default RefList
