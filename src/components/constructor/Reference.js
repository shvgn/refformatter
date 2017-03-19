import React from 'react'

function Reference (props) {
  console.log(props)
  const {title, author, volume, page, issue, issued} = props
  console.log('author', author)

  // Journal title
  const shortContainerTitle = props['short-container-title']

  return (
    <div>
      <div>{title}</div>
      <div>{author.map(a => `${a.given} ${a.family}`).join(', ')}</div>
      <span><i>{shortContainerTitle}</i> <b>{volume}</b> {issue}, pp. {page}, Issued {issued['date-parts'][0].join('-')}</span>
    </div>
  )
}

export default Reference
