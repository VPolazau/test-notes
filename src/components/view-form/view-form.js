import React, { memo } from 'react'

import { btnEvent } from '../../events/event'

import './view-form.scss'

const ViewForm = memo(({ info }) => {
  let { id, text, tags } = info

  const onClose = () => {
    btnEvent.emit('onCloseEditForm')
  }

  const onEditItem = () => {
    btnEvent.emit('onEditItem', id)
  }

  return (
    <div className='ViewForm'>
      <div className='ViewForm__div' disabled>
        {spanWrapper(text, tags, id)}
      </div>
      <div className='ViewForm__controls'>
        <div className='ViewForm__tags'>
          {tags?.map(el => {
            return (
              <div className='tag' key={`${id}_${el.id}`}>
                <span className='tag__name'>{el.tag}</span>
              </div>
            )
          })}
        </div>
        <button className='btn ViewForm__btn-edit' onClick={onEditItem}>
          Edit
        </button>
        <button className='btn ViewForm__btn-close' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
})

export default ViewForm

function spanWrapper(text, tags, id) {
  const _reTag = /(\#.[^\s\.\,]*)/gm // find tags
  const _re = /[^#]*/gm // without '#'
  const arr = text.split(_reTag)
  tags.map(el => {
    const indx = arr.indexOf(el.tag)
    if (indx === -1)
      arr.splice(
        1,
        1,
        <strong key={`${id}_${el.id}`} style={{ color: 'red' }}>
          {el.tag.match(_re).join('')}
        </strong>
      )
    else
      arr.splice(
        indx,
        1,
        <strong key={`${id}_${el.id}`} style={{ color: 'red' }}>
          {el.tag.match(_re).join('')}
        </strong>
      )
  })

  return arr
}
