import React, { useEffect, useState } from 'react'
import { btnEvent } from '../../events/event'
import { useAppSelector } from '../../hooks/redux'

import Item from '../item'

import './item-list.scss'

const ItemList = () => {
  const { notes } = useAppSelector(data => data.notes)
  const [filteredNotes, setFilteredNotes] = useState(notes)
  const [term, setTerm] = useState('')

  useEffect(() => {
    btnEvent.addListener('onFilterChange', term => setTerm(term))
  }, [])

  useEffect(() => {
    setFilteredNotes(() => {
      return notes.filter(note => {
        return (
          note.tags
            .map(el => el.tag)
            .join('')
            .indexOf(term) > -1
        )
      })
    })
  }, [notes, term])

  return (
    <div className='ItemList'>
      {filteredNotes.map(item => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  )
}

export default ItemList
