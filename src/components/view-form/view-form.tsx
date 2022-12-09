import React, { memo } from 'react'

import { btnEvent } from '../../events/event'
import spanWrapper from '../../helpers/spanWrapper'

import './view-form.scss'

interface IViewFormProps {
  info: {
    id: number,
    text: string,
    tags: {
      id: number,
      tag: string
    }[]
  }
}

const ViewForm: React.FC<IViewFormProps> = memo(({ info }) => {
  let { id, text, tags } = info

  const onClose = () => {
    btnEvent.emit('onCloseEditForm')
  }

  const onEditItem = () => {
    btnEvent.emit('onEditItem', id)
  }
  
  return (
    <div className='ViewForm'>
      <div className='ViewForm__div'>
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
