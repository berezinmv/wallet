import {RECEIVE_USERS} from "../actions/fetch-users";
import type {User} from "../domain/user";
import {USER_UPDATED} from "../actions/user-updated";

export default function (state: Array<User> = [], action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return action.payload.users;
        case USER_UPDATED:
            const user = action.payload.user;
            const index = state.findIndex(u => u.user_id === user.user_id);
            if (index > -1) {
                state = state.concat();
                state[index] = {...state[index], ...user};
                return state;
            }
    }


    return state;
}