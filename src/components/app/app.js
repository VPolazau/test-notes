import React from 'react'

import ErrorBoudry from '../error-boundry'
import Header from '../header'
import EditForm from '../edit-form'
import ItemList from '../item-list'

import './app.css'

const App = () => {
  return (
    <ErrorBoudry>
      <div className='container'>
        <Header />
        <EditForm />
        <ItemList />
      </div>
    </ErrorBoudry>
  )
}

export default App
