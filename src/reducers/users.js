import {ADD_USER} from "../actions/add-user";
import {RECEIVE_USERS} from "../actions/fetch-users";
import type {User} from "../domain/user";

export type Users = Array<User>;

export default function (state: Users = [], action) {
    switch (action.type) {
        case ADD_USER:
            const {payload: {name}} = action;
            if (name) {
                return state.concat({name, id: state.length});
            }
            break;
        case RECEIVE_USERS:
            return action.payload.users;
    }


    return state;
}