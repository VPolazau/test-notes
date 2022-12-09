import React from 'react'

import {btnEvent} from '../../events/event'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { newNote } from '../../store/redusers/notesSlice'

import './header.scss'

const Header = () => {
  const { notes } = useAppSelector(state => state.notes)
  const dispatch = useAppDispatch()

  const onFiltered: React.ChangeEventHandler<HTMLInputElement> = event => {
    btnEvent.emit('onFilterChange', event.target.value)
  }

  const newItem = () => {
    if(notes[notes.length - 1].text !== ''){
    dispatch(newNote())
    btnEvent.emit('onAddNewItem', -1)
    } else btnEvent.emit('onAddNewItem', notes.length - 1)
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
