import { PostsAction, PostsActionTypes } from 'types/posts'

interface PostsType {
    posts: any[]
}

const defaultState: PostsType = {
    posts: [],
}

export const postsReducer = (state = defaultState, action: PostsAction): PostsType => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return { posts: action.payload }

        case PostsActionTypes.SET_POSTS:
            return { posts: action.payload }

        default:
            return state
    }
}
