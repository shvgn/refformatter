import React, { Component } from 'react'
import './App.css'
import Constructor from './components/constructor/Constructor'
import Formatter from './components/formatter/Formatter'

class App extends Component {
  render () {
    return (
      <div id='app'>
        <Constructor />
        <Formatter />
      </div>
    )
  }
}

export default App
