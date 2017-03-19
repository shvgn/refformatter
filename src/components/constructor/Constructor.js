import React, {Component} from 'react'

export default class Constructor extends Component {
  render () {
    return (<div id='constructor'>

      <h2>Constructor</h2>

      <div id='search'>
        <input type='text' id='search__input' placeholder='DOI' />
        {/* <!--input type="button" value="+" id="search__button" /--> */}
      </div>

      <div id='chosen__refs'>
        <ul id='chosen__refs__list'>
          <li>Chosen reference 1</li>
          <li>Chosen reference 2</li>
          <li>Chosen reference 3</li>
          <li>Chosen reference 4</li>
        </ul>
      </div>

    </div>)
  }
}
