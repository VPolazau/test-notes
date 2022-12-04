import React from 'react'
import { useSelector } from 'react-redux'

import Item from '../item'

import './item-list.scss'

const ItemList = () => {
  const { notes } = useSelector(data => data.notes.notes)
  return (
    <div className='ItemList'>
      {notes.map(item => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  )
}

export default ItemList
