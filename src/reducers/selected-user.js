import {SELECT_USER} from "../actions/select-user";
import {RECEIVE_USERS} from "../actions/fetch-users";
import type {User} from "../domain/user";

const selectedUser = (state: string = null, action) => {
    switch (action.type) {
        case SELECT_USER:
            return action.payload.user_id || null;
        case RECEIVE_USERS:
            const users = action.payload.users;
            if (!users.some((user: User) => user.user_id === state)) {
                return null;
            }
    }

    return state;
};

export default selectedUser;