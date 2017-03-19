import React, {Component} from 'react'
import Reference from './Reference'

class RefList extends Component {
  render () {
    const {references} = this.props
    return (
      <ul id='chosen__refs__list'>
        {references.map(r => <li key={r.DOI}><Reference {...r} /></li>)}
      </ul>
    )
  }
}

export default RefList
