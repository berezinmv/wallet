import createAction from "./create-action";
import type {User} from "../domain/user";
import loadUsers from "../api/load-users";

export const REQUEST_USERS = "REQUEST_USERS";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const requestUsers = (offset: number, limit: number) => createAction(REQUEST_USERS, {offset, limit});

export const receiveUsers = (offset: number, limit: number, users: Array<User>, total: number) =>
    createAction(RECEIVE_USERS, {offset, limit, users, total});

export const fetchUsers = (offset: number, limit: number) =>
    dispatch => {

        dispatch(requestUsers(offset, limit));

        return loadUsers(offset, limit)
            .then(responseData => dispatch(receiveUsers(offset, limit, responseData.data, responseData.recordsTotal)));
    };

