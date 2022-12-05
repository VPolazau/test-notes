import React from 'react'
import { memo } from 'react'

import './item.scss'

const Item = memo(({ info }) => {
  const { id, text, tag } = info
  const _re = /[^#]*/gm
  const modText = text.match(_re).join('')
  const itemText = modText.length > 70 ? `${modText.slice(0, 70)}...` : modText

  return (
    <div className='Item' onClick={() => console.log(`Item ${id}`)}>
      <button
        className='btn Item__btn-delete'
        onClick={e => {
          e.stopPropagation()
          console.log(`Delete Item ${id}`)
        }}
      >
        <span>×</span>
      </button>
      <div className='Item__info'>{itemText}</div>
      <div className='Item__tags'>{tag}</div>
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
