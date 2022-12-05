import React from 'react'

import {btnEvent} from '../../events/event'

import './header.scss'

const Header = () => {

  const onFiltered = event => {
    btnEvent.emit('onFilterChange', event.target.value)
  }

  const newItem = () => {
    btnEvent.emit('onAddNewItem')
  }

  return (
    <div className='Header'>
      <h1 className='Header__title'>Test Notes</h1>
      <input
        className='Header__input'
        type='text'
        placeholder='enter tag'
        onChange={onFiltered}
      />
      <button className='btn Header__btn-new' onClick={newItem}>New</button>
    </div>
  )
}

export default Header
