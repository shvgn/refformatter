const defaults = {
  delimiter: ', ',
  lastDelimiter: ', and ',
  maxNames: Infinity,
  formatName: (author) => {
    let {given: first, family: last} = author
    first = first.split('.').join('. ')
    return `${first} ${last}`
  }
}

const publishers = {
  apl: {
    name: 'Applied Physic Letters'
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
