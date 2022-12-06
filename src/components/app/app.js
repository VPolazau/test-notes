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
    btnEvent.addListener('onAddNewItem', ()=> {
      console.log('onAddNewItem')
      setMod(1)
      setEditInfo({
        id: notes.length + 1,
        text: '',
        tags: []
      })
    })
    btnEvent.addListener('onCloseEditForm', ()=> {
      setMod(0)
    })
    btnEvent.addListener('onItemClick', id => {
      setMod(2)
      const indxNote = notes.findIndex(note => note.id === id)
      setInfoId(indxNote)
    })
    btnEvent.addListener('onEditItem', id => {
      setMod(1)
      const indxNote = notes.findIndex(note => note.id === id)
      setInfoId(indxNote)
    })

  },[])

  useEffect(() => {
    setEditInfo(notes[infoId])
  }, [notes, infoId])

  return (
    <ErrorBoudry>
      <div className='App'>
        <Header />

          {mod === 0 && null}
          {mod === 1 && <EditForm isEdit={true} info={editInfo}/>}
          {mod === 2 && <EditForm isEdit={false} info={editInfo}/>}

        <ItemList />
      </div>
    </ErrorBoudry>
  )
}

export default App
