export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    SET_POSTS = 'SET_POSTS',
}

export type PostsActionType = PostsActionTypes.FETCH_POSTS | PostsActionTypes.SET_POSTS

export interface PostsAction {
    type: PostsActionType
    payload?: any
}
