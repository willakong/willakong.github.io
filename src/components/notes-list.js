import React from 'react'

import Item from './notes-item'

const NotesList = ({ note }) => {
  const directoryName = Object.keys(note)[0];

  const NotesItem = note[directoryName]
  .map(noteItem => <Item key={ noteItem.id } item={ noteItem } />)

  return (
    <div>
      <h3>{ directoryName } </h3>
      <ul>
        { NotesItem }
      </ul>
    </div>
  )
}
export default NotesList
