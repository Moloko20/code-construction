import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// import { Catalog } from 'Components/Catalog'

import './index.scss'

function App() {
    require('./index.scss')

    return <div>hi</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
)
