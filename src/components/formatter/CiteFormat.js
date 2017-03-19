import React, {Component} from 'react'

class CiteFormat extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.knownFormats = [
      {abbr: 'apl', name: 'Applied Physic Letters'},
      {abbr: 'prb', name: 'Physical Review B'},
      {abbr: 'pssb', name: 'Physica Status Solidi B'},
      {abbr: 'pssc', name: 'Physica Status Solidi C'}
    ]
  }

  handleChange (e) {
    console.log(e.target.value)
    this.props.setFormat(e.target.value)
  }

  render () {
    const selectStyle = {
      fontSize: '1.3rem',
      margin: '0.2rem'
    }

    return (
      <div>
        <select style={selectStyle} onChange={this.handleChange}>
          {this.knownFormats.map(fmt => {
            return <option value={fmt.abbr} key={fmt.abbr}>{fmt.name}</option>
          })}
        </select>
      </div>
    )
  }
}

export default CiteFormat
