import React from 'react'

import './item.scss'

const Item = () => {
  const tags = '#tag#tag#tag'
  return (
    <div className='Item' onClick={() => console.log('Item')}>
      <button
        className='btn Item__btn-delete'
        onClick={e => {
          e.stopPropagation()
          console.log('Delete Item')
        }}
      >
        <span>×</span>
      </button>
      <div className='Item__info'>I wonna go to shop</div>
      <div className='Item__tags'>
        #tag#tag#tag
      </div>
      <button
        className='btn Item__btn-edit'
        onClick={e => {
          e.stopPropagation()
          console.log('Edit Item')
        }}
      >
        Edit
      </button>
    </div>
  )
}

export default Item
