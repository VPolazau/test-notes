import React from 'react'

import './edit-form.scss'

const EditForm = ({isEdit}) => {
  
  const view = (
    <div className='EditForm'>
      <textarea
        className='EditForm__textarea'
        defaultValue='I wonna go to #shop'
        disabled
      />
      <div className='EditForm__controls'>
        <div className='EditForm__tags'>
          <div className='tag'>
            <span className='tag__name'>tag</span>
          </div>
        </div>
        <button className='btn EditForm__btn-close ml'>Close</button>
      </div>
    </div>
  )

  const edit = (
    <div className='EditForm'>
      <textarea className='EditForm__textarea' defaultValue='I wonna go to #shop' />
      <div className='EditForm__controls'>
        <div className='EditForm__tags'>
          <div className='tag'>
            <span className='tag__name'>tag</span>
            <button className='btn tag__btn-delete'>×</button>
          </div>
        </div>
        <button className='btn EditForm__btn-save ml'>Save</button>
        <button className='btn EditForm__btn-close'>Close</button>
      </div>
    </div>
  )
  return isEdit ? edit : view
}

export default EditForm
