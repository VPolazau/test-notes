import React, { useEffect, useState } from 'react'

import ErrorBoudry from '../error-boundry'
import Header from '../header'
import EditForm from '../edit-form'
import ItemList from '../item-list'

import './app.scss'
import { btnEvent } from '../../events/event'
import { useSelector } from 'react-redux'

const App = () => {
  const { notes } = useSelector(state => state.notes)
  const [mod, setMod] = useState(0)
  const [infoId, setInfoId] = useState()
  const [editInfo, setEditInfo] = useState()

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
    setEditInfo(() => {
      if(indxNote === -1) return notes[notes.length-1]
      return notes[indxNote]
    })
  }, [notes, infoId])

  return (
    <ErrorBoudry>
      <div className='App'>
        <Header />

        {mod === 0 && null}
        {editInfo ? mod === 1 && <EditForm isEdit={true} info={editInfo}/> : null}
        {editInfo ? mod === 2 && <EditForm isEdit={false} info={editInfo} /> : null}

        <ItemList />
      </div>
    </ErrorBoudry>
  )
}

export default App
