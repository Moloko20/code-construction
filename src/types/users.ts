export enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    SET_USERS = 'SET_USERS',
}

export type UsersActionType = UsersActionTypes.FETCH_USERS | UsersActionTypes.SET_USERS

export interface UsersAction {
    type: UsersActionType
    payload?: any
}
