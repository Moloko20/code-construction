import { PostsAction, PostsActionTypes } from 'types/posts'

interface PostsType {
    defaultPosts: any[]
    filteredPosts: any[]
}

const defaultState: PostsType = {
    defaultPosts: [],
    filteredPosts: [],
}

export const postsReducer = (state = defaultState, action: PostsAction): PostsType => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return { ...state, defaultPosts: action.payload }

        case PostsActionTypes.SET_POSTS:
            return { ...state, filteredPosts: action.payload }

        default:
            return state
    }
}
