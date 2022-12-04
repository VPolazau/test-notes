import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/data.json'

const initialState = {
  notes: data.notes,
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
})

export const {} = notesSlice.actions

export default notesSlice.reducer
