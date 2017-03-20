const defaults = {
  delimiter: ', ',
  lastDelimiter: ', and ',
  afterAuthors: ', ',
  leftQuote: '"',
  rightQuote: '"',
  maxNames: 999, // Infinity won't export :(
  formatName: (author) => {
    let {given: first, family: last} = author
    first = first.split('.').join('. ')
    return `${first} ${last}`
  },
  formatTitle: title => title
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
