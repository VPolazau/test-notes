import React from 'react'

import ErrorBoudry from '../error-boundry'
import Header from '../header'
import EditForm from '../edit-form'
import ItemList from '../item-list'

import './app.css'
import { useSelector } from 'react-redux'

const App = () => {
  const { notes } = useSelector(state => state.notes)

  console.log(notes)
  return (
    <ErrorBoudry>
      <div className='App'>
        <Header />
        <EditForm />
        <ItemList />
      </div>
    </ErrorBoudry>
  )
}

export default App
