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
    // const doi = '10.1002/pssc.201200953'

    // eslint-disable-next-line
    fetch(APIURL + doi, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(resp => {
        console.log(resp)
        if (resp.status !== 200) throw resp.statusText
        return resp.json()
      })
      .then(x => this.setState((prevState, props) => {
        const {references} = prevState
        console.log('pushing x:', x.message)
        references.push(x.message)
        return Object.assign(prevState, {references})
      })
      )
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
          addReference={this.addReference.bind(this)}
          />
        <Formatter {...this.state} />
      </div>
    )
  }
}

export default App
