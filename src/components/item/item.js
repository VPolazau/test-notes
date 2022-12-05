import React from 'react'
import { memo } from 'react'
import { btnEvent } from '../../events/event'

import './item.scss'

const Item = memo(({ info }) => {
  const { id, text, tags } = info
  const _re = /[^#]*/gm
  const modText = text.match(_re).join('')
  const itemText = modText.length > 70 ? `${modText.slice(0, 70)}...` : modText

  const onItemClick = () => {
    btnEvent.emit('onItemClick', { id, text, tags })
  }

  return (
    <div className='Item' onClick={onItemClick}>
      <button
        className='btn Item__btn-delete'
        onClick={event => {
          event.stopPropagation()
          console.log(`Delete Item ${id}`)
        }}
      >
        <span>×</span>
      </button>
      <div className='Item__info'>{itemText}</div>
      <div className='Item__tags'>
        {tags.map(el => el.tag)}
      </div>
      <button
        className='btn Item__btn-edit'
        onClick={e => {
          e.stopPropagation()
          console.log(`Edit Item ${id}`)
        }}
      >
        Edit
      </button>
    </div>
  )
})

export default Item
