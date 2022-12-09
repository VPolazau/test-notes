import { combineReducers, configureStore } from '@reduxjs/toolkit'
import notesReducer from './redusers/notesSlice'

const rootReducer = combineReducers({
  notes: notesReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
