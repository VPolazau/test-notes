import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { btnEvent } from '../../events/event'

import Item from '../item'

import './item-list.scss'

const ItemList = () => {
  const { notes } = useSelector(data => data.notes)
  const [filteredNotes, setFilteredNotes] = useState(notes)

  useEffect(() => {
    btnEvent.addListener('onFilterChange', (term) => {
      setFilteredNotes( () => {
        return notes.filter(note => note.tag.join().indexOf(term) > -1)
      })
    })
    
    return () => {
      btnEvent.removeAllListeners()
    }
  },[filteredNotes])
  
  return (
    <div className='ItemList'>
      {filteredNotes.map(item => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  )
}

export default ItemList
