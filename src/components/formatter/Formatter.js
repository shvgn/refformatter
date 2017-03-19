import React, {Component} from 'react'
import CiteFormat from './CiteFormat'
import FormattedList from './FormattedList'

class Formatter extends Component {
  render () {
    const formatterStyle = {
      backgroundColor: '#fff8f0',
      flex: '50%'
    }

    return (
      <div style={formatterStyle}>
        <h2>Formatter</h2>

        <CiteFormat
          setFormat={this.props.setFormat}
          />

        <FormattedList
          references={this.props.references}
          format={this.props.format}
          />
      </div>
    )
  }
}

export default Formatter
