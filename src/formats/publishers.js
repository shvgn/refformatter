import React from 'react'

const defaults = {
  sequence: [
    'authors',
    'title',
    'publisher',
    'volume',
    'issue',
    'page',
    'date'
  ],

  delimiter: ', ',
  lastDelimiter: ', and ',

  leftQuote: '"',
  rightQuote: '"',

  maxNames: 999, // Infinity won't export :(
  formatName: (author) => {
    let {given: first, family: last} = author
    first = first.split('.').join('. ')
    return `${first} ${last}`
  },
  afterAuthors: ', ',

  formatTitle: title => title,
  styleTitle: {},
  afterTitle: ', ',

  afterPublisher: ' ',
  formatPublisher: p => p,

  styleVolume: {fontWeight: 'bold'},
  afterVolume: ' ',

  afterIssue: ' ',

  afterPage: ' ',

  formatDate: dateParts => {
    if (dateParts[0] > 1000) return dateParts[0]
    if (dateParts[1] > 1000) return dateParts[1]
    if (dateParts[2] > 1000) return dateParts[2]
    return ''
  },
  afterDate: '.'
}

const publishers = {
  apl: {
    name: 'Applied Physic Letters',
    leftQuote: '“',
    rightQuote: '”'
  },
  prb: {
    name: 'Physical Review B'
  },
  pssb: {
    name: 'Physica Status Solidi B'
  },
  pssc: {
    name: 'Physica Status Solidi C'
  }
}

for (let p in publishers) {
  publishers[p] = Object.assign({}, defaults, publishers[p])
}

export default publishers
