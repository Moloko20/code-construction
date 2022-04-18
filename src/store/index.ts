import { createStore, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import { usersReducer } from './reducers/usersReducer'
import { postsReducer } from './reducers/postsReducer'

const rootReducer = combineReducers({
    usersReducer,
    postsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
