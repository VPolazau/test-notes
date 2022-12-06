import React, { memo, useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { deleteTag } from '../../store/redusers/notesSlice'
import { btnEvent } from '../../events/event'

import './edit-form.scss'

const EditForm = memo(({ isEdit, info }) => {
  const dispatch = useDispatch()
  const divTextareaRef = useRef()

  if(!info) return
  let { id, text, tags } = info

  const onClose = () => {
    btnEvent.emit('onCloseEditForm')
  }

  const onTagDelete = tagId => {
    dispatch(deleteTag({ noteId: id, tagId }))
  }

  const onChangeText = (event) => {
    console.log(event.target.value)
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
        onChange={onChangeText}
      />

      <div className='EditForm__controls'>
        <div className='EditForm__tags'>
          {tags.length === 0
            ? null
            : tags.map(el => {
                return (
                  <div className='tag' key={`${id}_${el.id}`}>
                    <span className='tag__name'>{el.tag}</span>
                    <button
                      className='btn tag__btn-delete'
                      onClick={() => onTagDelete(el.id)}
                    >
                      ×
                    </button>
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
