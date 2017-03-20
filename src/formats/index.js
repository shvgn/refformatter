import React from 'react'
import publishers from './publishers'

console.log(publishers)

export default function (publisher) {
  const opts = publishers[publisher]
  return function (ref) {
    return cite(ref, opts)
  }
}

function cite (ref, opts) {
  return (
    <div style={{fontFamily: 'Times, serif'}}>
      {authors(ref.author, opts)}
      {opts.afterAuthors}
      {title(ref.title, opts)}
    </div>
  )
}

function authors (authors, opts) {
  const {
    maxNames,
    delimiter,
    lastDelimiter,
    formatName = a => `${a.given} ${a.family}`
  } = opts

  const limit = Math.min(maxNames, authors.length)
  const allNames = (limit === authors.length)
  let cnt = 0
  const noWrap = {whiteSpace: 'nowrap'}

  return (
    <span>
      {
        authors
        .map(formatName)
        .map(a => (<span style={noWrap} key={a}>{a}</span>))
        .reduce((acc, elem) => {
          cnt++
          let delim = delimiter
          if (allNames && cnt === limit) {
            delim = lastDelimiter
          }
          return (acc === null) ? [elem] : [...acc, delim, elem]
        }, null)
      }
    </span>
  )
}

function title (titles, opts) {
  let title = opts.formatTitle(titles[0].trim())
  return (
    <span>{opts.leftQuote}{title}{opts.rightQuote}</span>
  )
}
