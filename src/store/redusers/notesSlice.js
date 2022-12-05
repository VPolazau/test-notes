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
      const indx = state.notes.findIndex(note => note.id === action.payload)
      state.notes.splice(indx,1)
    },
  },
})

export const { deleteNote } = notesSlice.actions

export default notesSlice.reducer
