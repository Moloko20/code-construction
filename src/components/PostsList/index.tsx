import React from 'react'

import { useAppSelector, useAppDispatch } from 'hooks'

import { PostsActionTypes } from 'types/posts'

import { Search } from 'components/UI/Search'
import { Pagination } from 'components/Pagination'

export function PostsList() {
    const posts = useAppSelector(state => state.postsReducer.filteredPosts)
    const defaultPosts = useAppSelector(state => state.postsReducer.defaultPosts)

    const defaultUsers = useAppSelector(state => state.usersReducer.defaultUsers)

    const [currentPage, currentPageSet] = React.useState(1)
    const postsPerPages = 16

    const dispatch = useAppDispatch()

    const lastPostId = currentPage * postsPerPages
    const firstPostId = lastPostId - postsPerPages

    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredPosts = defaultPosts.filter(post =>
            Object.values(post)[2].toString().includes(event.target.value),
        )

        dispatch({ type: PostsActionTypes.SET_POSTS, payload: filteredPosts })
    }

    React.useEffect(() => {
        dispatch({ type: PostsActionTypes.SET_POSTS, payload: defaultPosts })
    }, [])

    require('./index.sass')

    return (
        <section className="postslist">
            <div className="page__layout">
                <div className="postslist-header">
                    <div className="postslist-header__left">
                        <svg
                            width="25"
                            height="33"
                            viewBox="0 0 50 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M45.9822 12.95V33.3C45.9822 35.3435 44.3986 37 42.4451 37H3.53709C1.58356 37 0 35.3435 0 33.3V12.95C0 11.9284 0.791955 11.1 1.76855 11.1C2.01331 11.0438 2.26657 11.0438 2.51133 11.1L22.9911 25.9L43.5062 11.1C43.7397 11.0489 43.9802 11.0489 44.2136 11.1C45.1902 11.1 45.9822 11.9284 45.9822 12.95ZM0.884273 3.404L1.16724 3.7L22.9911 18.5L44.8857 3.7H45.0979C45.7332 3.33703 46.0855 2.59925 45.9822 1.85C45.9822 0.82843 45.1902 0 44.2136 0H1.76855C0.791955 0 0 0.82843 0 1.85C0.00919644 2.49565 0.345927 3.08765 0.884273 3.404Z"
                                fill="black"
                            />
                        </svg>

                        <h1>{posts.length} ????????????</h1>
                    </div>

                    <Search handler={search} />
                </div>

                <div className="postslist-wrapper">
                    {posts.slice(firstPostId, lastPostId).map(post => {
                        const author = defaultUsers.find(user => user.id === post.userId)

                        return (
                            <div className="postslist-card" key={post.id}>
                                <div className="postslist-card__wrapper">
                                    <div>
                                        <h4 className="postslist-card__title">{post.title}</h4>
                                        <p className="postslist-card__body">{post.body}</p>
                                    </div>

                                    <span className="postslist-card__author">
                                        Author: {author.name}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Pagination
                    pagesCount={posts.length / postsPerPages}
                    changePageHandler={currentPageSet}
                />
            </div>
        </section>
    )
}
