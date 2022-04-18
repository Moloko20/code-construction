import { UsersAction, UsersActionTypes } from 'types/users'

interface UsersType {
    users: any[]
}

const defaultState: UsersType = {
    users: [],
}

export const usersReducer = (state = defaultState, action: UsersAction): UsersType => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return { users: action.payload }

        case UsersActionTypes.SET_USERS:
            return { users: action.payload }

        default:
            return state
    }
}
