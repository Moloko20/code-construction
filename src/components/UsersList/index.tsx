import React from 'react'

import { useAppSelector, useAppDispatch } from 'hooks'

import { UsersActionTypes } from 'types/users'

export function UsersList() {
    const users = useAppSelector(state => state.usersReducer.users)
    const dispatch = useAppDispatch()

    const [isSorted, isSortedSet] = React.useState({
        id: true,
        name: false,
        company: false,
        phone: false,
        city: false,
    })

    const btnHandler = (title: string) => {
        let sortedArr = []

        switch (title) {
            case 'id':
                isSorted.id
                    ? (sortedArr = [...users].sort((a, b) => b[title] - a[title]))
                    : (sortedArr = [...users].sort((a, b) => a[title] - b[title]))

                isSortedSet(prevState => {
                    return {
                        id: !prevState.id,
                        name: false,
                        company: false,
                        phone: false,
                        city: false,
                    }
                })
                break

            case 'company':
                isSorted.company
                    ? (sortedArr = [...users].sort((a, b) =>
                          b.company?.name.localeCompare(a.company.name),
                      ))
                    : (sortedArr = [...users].sort((a, b) =>
                          a.company?.name.localeCompare(b.company.name),
                      ))

                isSortedSet(prevState => {
                    return {
                        id: false,
                        name: false,
                        company: !prevState.company,
                        phone: false,
                        city: false,
                    }
                })
                break

            case 'city':
                isSorted.city
                    ? (sortedArr = [...users].sort((a, b) =>
                          b.address?.city.localeCompare(a.address.city),
                      ))
                    : (sortedArr = [...users].sort((a, b) =>
                          a.address?.city.localeCompare(b.address.city),
                      ))

                isSortedSet(prevState => {
                    return {
                        id: false,
                        name: false,
                        company: false,
                        phone: false,
                        city: !prevState.city,
                    }
                })
                break

            case 'name':
                isSorted.name
                    ? (sortedArr = [...users].sort((a, b) => b[title].localeCompare(a[title])))
                    : (sortedArr = [...users].sort((a, b) => a[title].localeCompare(b[title])))

                isSortedSet(prevState => {
                    return {
                        id: false,
                        name: !prevState.name,
                        company: false,
                        phone: false,
                        city: false,
                    }
                })
                break

            case 'phone':
                isSorted.phone
                    ? (sortedArr = [...users].sort((a, b) => b[title].localeCompare(a[title])))
                    : (sortedArr = [...users].sort((a, b) => a[title].localeCompare(b[title])))

                isSortedSet(prevState => {
                    return {
                        id: false,
                        name: false,
                        company: false,
                        phone: !prevState.phone,
                        city: false,
                    }
                })
                break

            default:
                return
        }

        dispatch({ type: UsersActionTypes.SET_USERS, payload: sortedArr })
    }

    require('./index.sass')

    return (
        <section className="userslist">
            <div className="page__layout">
                <div className="userslist-header">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11Z"
                            fill="#000000"
                        />
                        <path
                            d="M18 21C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20C19 18.1435 18.2625 16.363 16.9497 15.0503C15.637 13.7375 13.8565 13 12 13C10.1435 13 8.36301 13.7375 7.05025 15.0503C5.7375 16.363 5 18.1435 5 20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18Z"
                            fill="#000000"
                        />
                    </svg>
                    <h1>{users.length} пользователей</h1>
                </div>

                <div className="table-wrapper">
                    <table className="table">
                        <thead className="table-head">
                            <tr>
                                <th>
                                    <button
                                        onClick={() => btnHandler('id')}
                                        className={`table__btn ${
                                            isSorted.id ? '' : 'table__btn--active'
                                        }`}
                                    >
                                        ID
                                        <svg
                                            width="10"
                                            height="8"
                                            viewBox="0 0 220 135"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M109.991 135C105.301 135 100.608 133.117 97.0327 129.35L5.37081 32.9213C-1.79027 25.3878 -1.79027 13.1836 5.37081 5.65011C12.5319 -1.88337 24.1329 -1.88337 31.2939 5.65011L109.991 88.4732L188.706 5.66518C195.867 -1.86831 207.468 -1.86831 214.629 5.66518C221.79 13.1987 221.79 25.4029 214.629 32.9364L122.967 129.365C119.387 133.132 114.689 135 109.991 135Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </button>
                                </th>
                                <th>
                                    <button
                                        onClick={() => btnHandler('name')}
                                        className={`table__btn ${
                                            isSorted.name ? '' : 'table__btn--active'
                                        }`}
                                    >
                                        ФИО
                                        <svg
                                            width="10"
                                            height="8"
                                            viewBox="0 0 220 135"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M109.991 135C105.301 135 100.608 133.117 97.0327 129.35L5.37081 32.9213C-1.79027 25.3878 -1.79027 13.1836 5.37081 5.65011C12.5319 -1.88337 24.1329 -1.88337 31.2939 5.65011L109.991 88.4732L188.706 5.66518C195.867 -1.86831 207.468 -1.86831 214.629 5.66518C221.79 13.1987 221.79 25.4029 214.629 32.9364L122.967 129.365C119.387 133.132 114.689 135 109.991 135Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </button>
                                </th>
                                <th>
                                    <button
                                        onClick={() => btnHandler('company')}
                                        className={`table__btn ${
                                            isSorted.company ? '' : 'table__btn--active'
                                        }`}
                                    >
                                        Компания
                                        <svg
                                            width="10"
                                            height="8"
                                            viewBox="0 0 220 135"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M109.991 135C105.301 135 100.608 133.117 97.0327 129.35L5.37081 32.9213C-1.79027 25.3878 -1.79027 13.1836 5.37081 5.65011C12.5319 -1.88337 24.1329 -1.88337 31.2939 5.65011L109.991 88.4732L188.706 5.66518C195.867 -1.86831 207.468 -1.86831 214.629 5.66518C221.79 13.1987 221.79 25.4029 214.629 32.9364L122.967 129.365C119.387 133.132 114.689 135 109.991 135Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </button>
                                </th>
                                <th>
                                    <button
                                        onClick={() => btnHandler('phone')}
                                        className={`table__btn ${
                                            isSorted.phone ? '' : 'table__btn--active'
                                        }`}
                                    >
                                        Телефон
                                        <svg
                                            width="10"
                                            height="8"
                                            viewBox="0 0 220 135"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M109.991 135C105.301 135 100.608 133.117 97.0327 129.35L5.37081 32.9213C-1.79027 25.3878 -1.79027 13.1836 5.37081 5.65011C12.5319 -1.88337 24.1329 -1.88337 31.2939 5.65011L109.991 88.4732L188.706 5.66518C195.867 -1.86831 207.468 -1.86831 214.629 5.66518C221.79 13.1987 221.79 25.4029 214.629 32.9364L122.967 129.365C119.387 133.132 114.689 135 109.991 135Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </button>
                                </th>
                                <th>
                                    <button
                                        onClick={() => btnHandler('city')}
                                        className={`table__btn ${
                                            isSorted.city ? '' : 'table__btn--active'
                                        }`}
                                    >
                                        Адрес
                                        <svg
                                            width="10"
                                            height="8"
                                            viewBox="0 0 220 135"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M109.991 135C105.301 135 100.608 133.117 97.0327 129.35L5.37081 32.9213C-1.79027 25.3878 -1.79027 13.1836 5.37081 5.65011C12.5319 -1.88337 24.1329 -1.88337 31.2939 5.65011L109.991 88.4732L188.706 5.66518C195.867 -1.86831 207.468 -1.86831 214.629 5.66518C221.79 13.1987 221.79 25.4029 214.629 32.9364L122.967 129.365C119.387 133.132 114.689 135 109.991 135Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>#{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.company?.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address?.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
