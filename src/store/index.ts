import { createStore, combineReducers } from 'redux'
import { usersReducer } from './reducers/usersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    usersReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
