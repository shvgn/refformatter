import React, {Component} from 'react'
import formatFactory from '../../formats/index'

class FormattedList extends Component {
  render () {
    const formatOf = formatFactory(this.props.format)
    return (
      <div>
        <ol>
          {this.props.references.map(r => <li key={r.DOI}>{formatOf(r)}</li>)}
        </ol>
      </div>
    )
  }
}

export default FormattedList

