import React from 'react'

type SearchPropsType = {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Search({ handler }: SearchPropsType) {
    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        handler(event)
    }

    require('./index.sass')

    return <input className="search" type="text" placeholder="Поиск..." onChange={searchHandler} />
}
