import React from 'react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { btnEvent } from '../../events/event'
import { deleteNote } from '../../store/redusers/notesSlice'

import './item.scss'

const Item = memo(({ info }) => {
  const dispatch = useDispatch()
  const { id, text, tags } = info
  const _re = /[^#]*/gm
  const clearText = text.match(_re).join('')
  const itemText = clearText.length > 70 ? `${clearText.slice(0, 70)}...` : clearText

  const onItemClick = () => {
    btnEvent.emit('onItemClick', { id, text, tags })
  }

  const onDeleteItem = e => {
    e.stopPropagation()
    dispatch(deleteNote(id))
    console.log(`Delete Item ${id}`)
  }

  const onEditItem = e => {
    e.stopPropagation()
    btnEvent.emit('onEditItem', { id, text, tags })
  }

  return (
    <div className='Item' onClick={onItemClick}>
      <button className='btn Item__btn-delete' onClick={onDeleteItem}>
        <span>×</span>
      </button>
      <div className='Item__info'>{itemText}</div>
      <div className='Item__tags'>{tags.map(el => el.tag)}</div>
      <button className='btn Item__btn-edit' onClick={onEditItem}>
        Edit
      </button>
    </div>
  )
})

export default Item
