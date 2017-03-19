import React, { Component } from 'react'
import './App.css'
import Constructor from './components/constructor/Constructor'
import Formatter from './components/formatter/Formatter'

class App extends Component {

  constructor () {
    super()
    this.addReference = this.addReference.bind(this)
    this.deleteReference = this.deleteReference.bind(this)
    this.state = {
      references: []
    }
  }

  componentWillMount () {
    // TODO delete
    this.addReference('10.1002/pssc.201200953')
  }

  deleteReference (doi) {
    this.setState((prevState, props) => {
      const references = prevState.references.slice()
      return Object.assign(prevState, {
        references: references.filter(x => x.DOI !== doi)
      })
    })
  }

  addReference (doi) {
    const APIURL = 'https://api.crossref.org/works/'

    // eslint-disable-next-line
    fetch(APIURL + doi, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(resp => {
        // console.log(resp)
        if (resp.status !== 200) throw resp.statusText
        return resp.json()
      })
      .then(x => this.setState((prevState, props) => {
        const references = prevState.references.slice()
        references.push(x.message)
        return Object.assign(prevState, {references})
      }))
      .catch(console.warn) // TODO show error in the interface
  }

  render () {
    return (
      <div style={{
        display: 'flex',
        backgroundColor: '#fee',
        alignItems: 'stretch'
      }}>
        <Constructor
          {...this.state}
          addReference={this.addReference}
          deleteReference={this.deleteReference}
          />
        <Formatter {...this.state} />
      </div>
    )
  }
}

export default App
