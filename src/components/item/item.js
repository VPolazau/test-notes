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
  
  const masTags = tags.map(el => el.tag)
  const itemTags = masTags.join('').length > 35 ? `${masTags.join('').slice(0,  35)}...` : masTags

  const onItemClick = () => {
    btnEvent.emit('onItemClick', id)
  }

  const onDeleteItem = e => {
    e.stopPropagation()
    dispatch(deleteNote(id))
  }

  return (
    <div className='Item' onClick={onItemClick}>
      <button className='btn Item__btn-delete' onClick={onDeleteItem}>
        <span>×</span>
      </button>
      <div className='Item__info'>{itemText}</div>
      <div className='Item__tags'>{itemTags}</div>
    </div>
  )
})

export default Item
