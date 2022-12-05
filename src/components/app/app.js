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
  const [info, setInfo] = useState()

  useEffect(() => {
    btnEvent.addListener('onAddNewItem', ()=> {
      console.log('onAddNewItem')
      setMod(1)
      setInfo({
        id: notes.length + 1,
        text: '',
        tags: []
      })
    })
    btnEvent.addListener('onCloseEditForm', ()=> {
      console.log('onCloseEditForm')
      setMod(0)
    })
    btnEvent.addListener('onItemClick', (props)=> {
      setMod(2)
      setInfo({...props})
    })
    btnEvent.addListener('onEditItem', (props) => {
      setMod(1)
      setInfo({...props})
    })
  },[])

  return (
    <ErrorBoudry>
      <div className='App'>
        <Header />

          {mod === 0 && null}
          {mod === 1 && <EditForm isEdit={true} info={info}/>}
          {mod === 2 && <EditForm isEdit={false} info={info}/>}

        <ItemList />
      </div>
    </ErrorBoudry>
  )
}

export default App
