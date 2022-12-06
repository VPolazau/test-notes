import React, { memo, useRef } from 'react'
import { btnEvent } from '../../events/event'

import './edit-form.scss'

const EditForm = memo(({ isEdit, info }) => {
  const divTextareaRef = useRef()

  const { id, text, tags } = info

  const onClose = () => {
    btnEvent.emit('onCloseEditForm')
  }

  const view = (
    <div className='EditForm'>
      <div className='EditForm__div-textarea' disabled>
        {spanWrapper(text, tags)}
      </div>
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
      <textarea
        className='EditForm__div-textarea'
        ref={divTextareaRef}
        spellCheck='false'
        value={text}
      />

      <div className='EditForm__controls'>
        <div className='EditForm__tags'>
          {tags.length === 0
            ? null
            : tags.map(el => {
                return (
                  <div className='tag' key={`${id}_${el.id}`}>
                    <span className='tag__name'>{el.tag}</span>
                    <button className='btn tag__btn-delete' >×</button>
                  </div>
                )
              })}
        </div>
        <button className='btn EditForm__btn-save ml'>Save</button>
        <button className='btn EditForm__btn-close' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
  return isEdit ? edit : view
})

export default EditForm

function spanWrapper(text, tags) {
  const _reTag = /(\#.[^\s\.\,]*)/gm // find tags
  const _re = /[^#]*/gm // without '#'
  const arr = text.split(_reTag)
  tags.map(el => {
    const indx = arr.indexOf(el.tag)
    if (indx === -1)
      arr.splice(
        1,
        1,
        <span key={el.id} style={{ color: '#2200ff' }}>
          {el.tag.match(_re).join('')}
        </span>
      )
    else
      arr.splice(
        indx,
        1,
        <span key={el.id} style={{ color: '#2200ff' }}>
          {el.tag.match(_re).join('')}
        </span>
      )
  })

  return arr
}
