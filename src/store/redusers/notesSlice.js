import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/data.json'

const initialState = {
  notes: data.notes,
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    deleteNote: (state, action) => {
      const indxNote = state.notes.findIndex(note => note.id === action.payload)
      state.notes.splice(indxNote, 1)
    },

    deleteTag: (state, action) => {
      const indxNote = state.notes.findIndex(note => note.id === action.payload.noteId)
      const indxTag = state.notes[indxNote].tags.findIndex(
        tag => tag.id === action.payload.tagId
      )
      //change text
      const tagIndexText = state.notes[indxNote].text
        .toLowerCase()
        .indexOf(state.notes[indxNote].tags[indxTag].tag)
      const newText = state.notes[indxNote].text.split('')
      newText.splice(tagIndexText, 1)
      state.notes[indxNote].text = newText.join('')
      //delete tag
      state.notes[indxNote].tags.splice(indxTag, 1)
    },

    onChangeNote: (state, action) => {
      const indxNote = state.notes.findIndex(note => note.id === action.payload.id)
      state.notes.splice(indxNote, 1, action.payload)
    },

    newNote: (state, action) => {
      let newId = null
      if(!state.notes[state.notes.length-1]) newId = 1
      else newId = state.notes[state.notes.length-1]?.id + 1
      state.notes.push({id: newId, text: '', tags: []})
    }
  },
})

export const { deleteNote, deleteTag, onChangeNote, newNote } = notesSlice.actions

export default notesSlice.reducer
