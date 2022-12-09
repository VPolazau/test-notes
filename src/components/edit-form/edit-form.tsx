import React, { memo, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { deleteTag, onChangeNote, deleteNote } from '../../store/redusers/notesSlice'
import { btnEvent } from '../../events/event'

import './edit-form.scss'

interface IEditFormProps {
  info: {
    id: number,
    text: string,
    tags: {
      id: number,
      tag: string
    }[]
  }
}

const EditForm: React.FC<IEditFormProps> = memo(({ info }) => {
  const ckeRef = useRef()
  const dispatch = useDispatch()

  let { id, text, tags } = info

  const onClose = () => {
    btnEvent.emit('onCloseEditForm')
  }

  const onTagDelete = (tagId: number) => {
    dispatch(deleteTag({ noteId: id, tagId }))
  }

  const onChangeText: React.ChangeEventHandler<HTMLTextAreaElement> = event => {
    const { value } = event.target
    const _re = /(\#.[^\s\.\,]*)/gm // find tags
    const masTags: RegExpMatchArray | null = value.toLowerCase().match(_re)

    const newTags: { id: number, tag: string }[] = []
    if (masTags) {
      for (var i = 0; i < masTags.length; i++) {
        newTags.push({ id: i, tag: masTags[i] })
      }
    }

    if (value === '') {
      dispatch(deleteNote(id))
      btnEvent.emit('onCloseEditForm')
    } else dispatch(onChangeNote({ id, text: value, tags: newTags }))
  }

  return (
    <div className='EditForm'>
      {text === '' ? <textarea
        className='EditForm__textarea'
        spellCheck='false'
        value=''
        onChange={onChangeText}
      /> : <textarea
        className='EditForm__textarea'
        spellCheck='false'
        defaultValue={text}
        onChange={onChangeText}
      />}

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
        <button className='btn EditForm__btn-close' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
})

export default EditForm
