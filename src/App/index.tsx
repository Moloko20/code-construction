import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { store } from 'store'

import { getUsers } from 'services/getUsers'

import { useAppDispatch } from 'hooks'

import { UsersActionTypes } from 'types/users'

import { Menu } from 'components/Menu'
import { UsersList } from 'components/UsersList'

function App() {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        getUsers().then(data => dispatch({ type: UsersActionTypes.FETCH_USERS, payload: data }))
    }, [])

    require('./index.sass')

    return (
        <div>
            <Menu />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <UsersList />
                        </>
                    }
                />
                <Route path="/posts" element={<div>posts</div>} />
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
