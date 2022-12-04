import React from 'react'

import './header.scss'

const Header = () => {
  return (
    <div className='Header'>
      <h1 className='Header__title'>Test Notes</h1>
      <input className='Header__input' type='text' placeholder='enter tag' />
      <button className='btn Header__btn-new'>New</button>
    </div>
  )
}

export default Header
