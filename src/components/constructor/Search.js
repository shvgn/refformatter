import React, {Component} from 'react'

class Search extends Component {

  handleSubmit (e) {
    e.preventDefault()
    const form = e.target
    const input = form.children[0]
    this.props.addReference(input.value)
    input.value = ''
  }

  render () {
    return (
      <div
        style={{
          backgroundColor: '#ddd'
        }}>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            placeholder='DOI'
            style={{
              width: '80%',
              fontSize: '1.3rem',
              padding: '0.2rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          />
        </form>

      </div>
    )
  }
}

export default Search
