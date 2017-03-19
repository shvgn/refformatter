import React, { Component } from 'react'
import './App.css'
import Constructor from './components/constructor/Constructor'
import Formatter from './components/formatter/Formatter'

class App extends Component {

  constructor () {
    super()
    this.state = {
      references: []
    }
  }

  deleteReference (doi) {

  }

  addReference (doi) {
    const APIURL = 'https://api.crossref.org/works/'
    const testPaper = '10.1002/pssc.201200953'
    this.setState((prevState, props) => {
      const {references} = prevState
      references.push(doi)
      return Object.assign(prevState, {references})
    })
    return

    fetch(APIURL + testPaper, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(
        x => this.setState((state, props) => {
          const {references} = state
          references.push(JSON.stringify(x, null, 2))
          return Object.assign(state, {references})
        })
      )
      .catch(console.warn)
  }

  render () {
    return (<div id='app' >

      <Constructor
        {...this.state}
        addReference={this.addReference.bind(this)}
      />

      <Formatter
        {...this.state}
      />

    </div>
    )
  }
}

export default App
