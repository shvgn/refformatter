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
      {opts.beforeAuthors}
      {authors(ref.author, opts)}
      {opts.afterAuthors}

      {opts.beforeTitle}
      {title(ref.title, opts)}
      {opts.afterTitle}

      {opts.beforePublisher}
      {publisher(ref, opts)}
      {opts.afterPublisher}

      {opts.beforeVolume}
      {volume(ref.volume, opts)}
      {opts.afterVolume}

      {opts.beforeIssue}
      {issue(ref.issue, opts)}
      {opts.afterIssue}

      {opts.beforePage}
      {page(ref.page, opts)}
      {opts.afterPage}

      {opts.beforeDate}
      {date(ref.issued[0], opts)}
      {opts.afterDate}
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
    <span style={opts.styleTitle}>{opts.leftQuote}{title}{opts.rightQuote}</span>
  )
}

function publisher (ref, opts) {
  const publisher =
    ref['short-container-title'][0] || ref['container-title'][0]
  return (
    <span>{publisher}</span>
  )
}

function volume (volume, opts) {
  return (
    <span style={opts.styleVolume}>{volume}</span>
  )
}

function issue (issue, opts) {
  return <span>{issue}</span>
}

function page (page, opts) {
  return <span>{page}</span>
}

function date (date, opts) {
  return <span>{date}</span>
}
