import React, {Component} from 'react'
import Search from './Search'
import RefList from './RefList'

class Constructor extends Component {
  render () {
    return (
      <div id='constructor'>
        <h2>Constructor</h2>
        <Search {...this.props} />
        <RefList {...this.props} />
      </div>
    )
  }
}

export default Constructor
