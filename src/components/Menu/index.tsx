import React from 'react'
import { Link } from 'react-router-dom'

function MenuComponent() {
    const [isActive, isActiveSet] = React.useState([true, false])

    React.useEffect(() => {
        switch (window.location.pathname) {
            case '/':
                isActiveSet([true, false])
                break

            case '/posts':
                isActiveSet([false, true])
                break

            default:
                break
        }
    }, [])

    require('./index.sass')

    return (
        <menu className="menu">
            <div className="page__layout">
                <ul className="menu-list">
                    <Link
                        className={`menu-list__link ${
                            isActive[0] ? 'menu-list__link--active' : ''
                        }`}
                        to="/"
                        onClick={() => isActiveSet([true, false])}
                    >
                        Users
                    </Link>
                    <Link
                        className={`menu-list__link ${
                            isActive[1] ? 'menu-list__link--active' : ''
                        }`}
                        to="/posts"
                        onClick={() => isActiveSet([false, true])}
                    >
                        Posts
                    </Link>
                </ul>
            </div>
        </menu>
    )
}

export const Menu = React.memo(MenuComponent)
