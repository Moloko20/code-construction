import React from 'react'

type PaginationPropsType = {
    pagesCount: number
    changePageHandler: (pageNumber: number) => void
}

function PaginationComponent({ pagesCount, changePageHandler }: PaginationPropsType) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pageNumbers.push(i)
    }

    require('./index.sass')

    return (
        <div className="pagination">
            <ul className="pagination-body">
                {pageNumbers.map(pageNumber => (
                    <li className="pagination-item" key={pageNumber}>
                        <button
                            className="pagination-item__button"
                            onClick={() => changePageHandler(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const Pagination = React.memo(PaginationComponent)
