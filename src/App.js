import React, { Component } from 'react'
import './App.css'
import Constructor from './components/constructor/Constructor'
import Formatter from './components/formatter/Formatter'
import {moveForward, moveBackward} from './helpers'

class App extends Component {

  constructor () {
    super()

    this.addReference = this.addReference.bind(this)
    this.deleteReference = this.deleteReference.bind(this)
    this.moveReferenceUp = this.moveReferenceUp.bind(this)
    this.moveReferenceDown = this.moveReferenceDown.bind(this)
    this.setFormat = this.setFormat.bind(this)

    this.state = {
      references: [],
      format: 'apl'
    }
  }

  componentWillMount () {
    // TODO delete
    const refs = [
      '10.1002/pssc.201200953',
      '10.1109/5.771073',
      '10.21883/FTP.2017.03.44215.8287', // Russian
      '10.1093/0199288917.001.0001', // Book
      '10.1103/PhysRevB.81.100411',
      '10.1097/SGA.0b013e3181ca03b9'
    ]
    refs.forEach(ref => this.addReference(ref))
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
    if (this.state.references
          .map(x => x.DOI.toLowerCase())
          .filter(x => x === doi.toLowerCase())
          .length > 0) {
      console.warn(doi + ' already present')
      return
    }

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

  moveReferenceDown (doi) {
    this.setState((prevState, props) => {
      const references = prevState.references.slice()
      const refsWithDOI = references.filter(x => x.DOI === doi)
      // No check for the array length here
      moveForward(references, refsWithDOI[0])
      return Object.assign(prevState, {references})
    })
  }

  moveReferenceUp (doi) {
    this.setState((prevState, props) => {
      const references = prevState.references.slice()
      const refsWithDOI = references.filter(x => x.DOI === doi)
      // No check for the array length here
      moveBackward(references, refsWithDOI[0])
      return Object.assign(prevState, {references})
    })
  }

  setFormat (format) {
    this.setState((prevState, props) => {
      return Object.assign(prevState, {format})
    })
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
          moveReferenceUp={this.moveReferenceUp}
          moveReferenceDown={this.moveReferenceDown}
          />
        <Formatter
          {...this.state}
          setFormat={this.setFormat}
          />
      </div>
    )
  }
}

export default App
