import React from 'react'

const NotesItem = ({ item }) => {
  const pdfNote = require('../data/notes/' + item.relativePath)

  return (
    <li>
      <a target="_blank" rel="noopener noreferrer" href={ pdfNote }>{ item.name }</a>
    </li>
  )
}
export default NotesItem
