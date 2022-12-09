import React from 'react'
import { memo } from 'react'
import { btnEvent } from '../../events/event'
import { useAppDispatch } from '../../hooks/redux'
import { deleteNote } from '../../store/redusers/notesSlice'

import './item.scss'

interface IItemInfo {
  info: {
    id: number;
    text: string;
    tags: {
      id: number;
      tag: string;
    }[]
  }
}

const Item: React.FC<IItemInfo> = memo(({ info }) => {
  const dispatch = useAppDispatch()
  const { id, text, tags } = info

  const onItemClick = () => {
    btnEvent.emit('onItemClick', id)
  }

  const onDeleteItem: React.ReactEventHandler = e => {
    e.stopPropagation()
    dispatch(deleteNote(id))
  }

  return (
    <div className='Item' onClick={onItemClick}>
      <button className='btn Item__btn-delete' onClick={onDeleteItem}>
        <span>×</span>
      </button>
      <div className='Item__info'>{limText(text)}</div>
      <div className='Item__tags'>{limTags(tags)}</div>
    </div>
  )
})

export default Item



function limText(text: string){
  const _re = /[^#]*/gm
  const clearText = text.match(_re)?.join('')
  if(clearText)
  return clearText.length > 70 ? `${clearText.slice(0, 70)}...` : clearText
}

function limTags(tags: {tag: string}[]){
  const masTags = tags.map(el => el.tag)
  return masTags.join('').length > 35 ? `${masTags.join('').slice(0, 35)}...` : masTags
}