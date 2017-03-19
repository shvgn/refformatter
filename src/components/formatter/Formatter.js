import React, {Component} from 'react'

export default class Formatter extends Component {
  render () {
    return (<div id='formatter'>

      <h2>Formatter</h2>

      <div id='format'>
        <select id='format__selector'>
          <option value='appl_phys_lett'>Applied Physics Letters</option>
          <option value='phys_rev_b'>Physical Review B</option>
          <option value='phy_stat_sol_b'>Physica Status Solidi B</option>
          <option value='phy_stat_sol_c'>Physica Status Solidi C</option>
        </select>
      </div>

      <div id='formatter__refs'>
        <ol id='formatter__refs__list'>
          <li>Formatted reference 1</li>
          <li>Formatted reference 2</li>
          <li>Formatted reference 3</li>
          <li>Formatted reference 4</li>
        </ol>
      </div>

    </div>)
  }
}
