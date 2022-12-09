import React, { useEffect, useState } from 'react'

import ErrorBoudry from '../error-boundry'
import Header from '../header'
import EditForm from '../edit-form'
import ItemList from '../item-list'

import './app.scss'
import { btnEvent } from '../../events/event'
import ViewForm from '../view-form'
import { useAppSelector } from '../../hooks/redux'

const App = () => {
  const { notes } = useAppSelector(state => state.notes)
  const [mod, setMod] = useState(0)
  const [infoId, setInfoId] = useState<number>()
  const [info, setInfo] = useState(notes[0])

  useEffect(() => {
    btnEvent.addListener('onAddNewItem', () => {
      setMod(1)
      setInfoId(-1)
    })
    btnEvent.addListener('onCloseEditForm', () => {
      setMod(0)
    })
    btnEvent.addListener('onItemClick', id => {
      setMod(2)
      setInfoId(id)
    })
    btnEvent.addListener('onEditItem', id => {
      setMod(1)
      setInfoId(id)
    })
  }, [])

  useEffect(() => {
    const indxNote = notes.findIndex(note => note.id === infoId)
    setInfo(() => {
      if (indxNote === -1) return notes[notes.length - 1]
      return notes[indxNote]
    })
  }, [notes, infoId])

  console.log(info);
  
  return (
    <ErrorBoudry>
      <div className='App'>
        <Header />

        {mod === 0 && null}
        {info ? mod === 1 && <EditForm info={info} /> : null}
        {info ? mod === 2 && <ViewForm info={info} /> : null}

        <ItemList />
      </div>
    </ErrorBoudry>
  )
}

export default App
