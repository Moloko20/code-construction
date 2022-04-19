import { UsersAction, UsersActionTypes } from 'types/users'

interface UsersType {
    defaultUsers: any[]
    filteredUsers: any[]
}

const defaultState: UsersType = {
    defaultUsers: [],
    filteredUsers: [],
}

export const usersReducer = (state = defaultState, action: UsersAction): UsersType => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return { ...state, defaultUsers: action.payload }

        case UsersActionTypes.SET_USERS:
            return { ...state, filteredUsers: action.payload }

        default:
            return state
    }
}
