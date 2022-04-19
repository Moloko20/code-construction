import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useAppDispatch } from 'hooks'

import { store } from 'store'

import { getUsers } from 'services/getUsers'
import { getPosts } from 'services/getPosts'

import { UsersActionTypes } from 'types/users'
import { PostsActionTypes } from 'types/posts'

import { Menu } from 'components/Menu'
import { UsersList } from 'components/UsersList'
import { PostsList } from 'components/PostsList'

function App() {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        getUsers().then(data => {
            dispatch({ type: UsersActionTypes.FETCH_USERS, payload: data })
            dispatch({ type: UsersActionTypes.SET_USERS, payload: data })
        })
    }, [])

    React.useEffect(() => {
        getPosts().then(data => {
            dispatch({ type: PostsActionTypes.FETCH_POSTS, payload: data })
            dispatch({ type: PostsActionTypes.SET_POSTS, payload: data })
        })
    }, [])

    require('./index.sass')

    return (
        <div>
            <Menu />

            <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="/posts" element={<PostsList />} />
                <Route path="/profile" element={<div>profile</div>} />
            </Routes>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
