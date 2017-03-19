import React, {Component} from 'react'

class RefList extends Component {
  render () {
    const {references} = this.props
    return (
      <ul id='chosen__refs__list'>
        {references.map(r => <li key={r}>{r}</li>)}
      </ul>
    )
  }
}

export default RefList
