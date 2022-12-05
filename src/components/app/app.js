import React, { useEffect, useState } from 'react'

import ErrorBoudry from '../error-boundry'
import Header from '../header'
import EditForm from '../edit-form'
import ItemList from '../item-list'

import './app.scss'
import { btnEvent } from '../../events/event'

const App = () => {

  const [mod, setMod] = useState(0)

  useEffect(() => {
    btnEvent.addListener('onAddNewItem', ()=> {
      setMod(1)
    })
    
  },[])

  return (
    <ErrorBoudry>
      <div className='App'>
        <Header />

          {mod === 0 && null}
          {mod === 1 && <EditForm isEdit={true}/>}
          {mod === 2 && <EditForm isEdit={false}/>}
          {/* mod === 0 ? null : mod === 1 ? <EditForm isEdit={true}/> : <EditForm isEdit={false}/> */}

        <ItemList />
      </div>
    </ErrorBoudry>
  )
}

export default App
