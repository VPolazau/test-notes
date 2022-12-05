import React from 'react'
import { btnEvent } from '../../events/event'

import './edit-form.scss'

const EditForm = ({ isEdit, info }) => {
  const { id, text, tags } = info

  const onClose = () => {
    btnEvent.emit('onCloseEditForm')
  }

  const view = (
    <div className='EditForm'>
      <textarea className='EditForm__textarea' value={text} disabled/>
      <div className='EditForm__controls'>
        <div className='EditForm__tags'>
          {tags?.map(el => {
            return (
              <div className='tag' key={`${id}_${el.id}`}>
                <span className='tag__name'>{el.tag}</span>
              </div>
            )
          })}
        </div>
        <button className='btn EditForm__btn-close ml' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )

  const edit = (
    <div className='EditForm'>
      <textarea className='EditForm__textarea' defaultValue={text} />
      <div className='EditForm__controls'>
        <div className='EditForm__tags'>
          {tags.length === 0 ? null : (
            <div className='tag'>
              <span className='tag__name'>{tags.tag}</span>
              <button className='btn tag__btn-delete'>×</button>
            </div>
          )}
        </div>
        <button className='btn EditForm__btn-save ml'>Save</button>
        <button className='btn EditForm__btn-close' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
  return isEdit ? edit : view
}

export default EditForm
