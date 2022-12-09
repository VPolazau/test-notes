import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import data from '../../data/data.json'

interface Inotes {
  notes: {
    id: number,
    text: string,
    tags: {
      id: number,
      tag: string
    }[]
  }[]
}

const initialState: Inotes = {
  notes: data.notes,
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    deleteNote: (state, action: PayloadAction<number>) => {
      const indxNote: number = state.notes.findIndex(note => note.id === action.payload)
      state.notes.splice(indxNote, 1)
    },

    deleteTag: (state, action: PayloadAction<{noteId: number, tagId: number}>) => {
      const indxNote: number = state.notes.findIndex(note => note.id === action.payload.noteId)
      const indxTag: number = state.notes[indxNote].tags.findIndex(
        tag => tag.id === action.payload.tagId
      )
      //change text
      const tagIndexText: number = state.notes[indxNote].text
        .toLowerCase()
        .indexOf(state.notes[indxNote].tags[indxTag].tag)
      const newText: string[] = state.notes[indxNote].text.split('')
      newText.splice(tagIndexText, 1)
      state.notes[indxNote].text = newText.join('')
      //delete tag
      state.notes[indxNote].tags.splice(indxTag, 1)
    },

    onChangeNote: (state, action) => {
      const indxNote: number = state.notes.findIndex(note => note.id === action.payload.id)
      state.notes.splice(indxNote, 1, action.payload)
    },

    newNote: (state, action: PayloadAction<undefined>) => {
      let newId: number | null = null
      if(!state.notes[state.notes.length-1]) newId = 1
      else newId = state.notes[state.notes.length-1]?.id + 1
      state.notes.push({id: newId, text: '', tags: []})
    }
  },
})

export const { deleteNote, deleteTag, onChangeNote, newNote } = notesSlice.actions

export default notesSlice.reducer
