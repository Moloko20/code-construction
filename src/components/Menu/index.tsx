import React from 'react'
import { Link } from 'react-router-dom'

function MenuComponent() {
    require('./index.sass')

    return (
        <menu className="menu">
            <div className="page__layout">
                <ul className="menu-list">
                    <Link className="menu-list__link" to="/" onClick={() => {}}>
                        Users
                    </Link>
                    <Link className="menu-list__link" to="/posts" onClick={() => {}}>
                        Posts
                    </Link>
                </ul>
            </div>
        </menu>
    )
}

export const Menu = React.memo(MenuComponent)
