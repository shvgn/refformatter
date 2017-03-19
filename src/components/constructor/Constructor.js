import React, {Component} from 'react'
import Search from './Search'
import RefList from './RefList'

class Constructor extends Component {
  render () {
    return (
      <div style={{
        backgroundColor: '#f0f8ff',
        flex: '50%',
        maxHeight: '100%'
      }}>
        <h2>Constructor</h2>
        <Search {...this.props} />
        <RefList {...this.props} />
      </div>
    )
  }
}

export default Constructor
