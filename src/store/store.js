import { combineReducers, configureStore } from '@reduxjs/toolkit'
import notesReducer from './redusers/notesSlice'

const rootReducer = combineReducers({
  notes: notesReducer,
})

export const store = configureStore({
  reducer: {
    notes: rootReducer,
  }
})
