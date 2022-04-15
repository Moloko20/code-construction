import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Menu } from 'components/Menu'
import { UsersList } from 'components/UsersList'

function App() {
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
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)
