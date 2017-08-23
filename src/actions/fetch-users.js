import createAction from "./create-action";
import type {User} from "../domain/user";
import loadUsers from "../api/load-users";

export const REQUEST_USERS = "REQUEST_USERS";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const requestUsers = (offset: number, limit: number) => createAction(REQUEST_USERS, {offset, limit});

export const receiveUsers = (offset: number, limit: number, users: Array<User>, total: number) =>
    createAction(RECEIVE_USERS, {offset, limit, users, total});

export const usersOnPage = 20;

export const fetchUsers = () =>
    (dispatch, getState) => {

        const {usersPage: page, usersSearch: searchText} = getState();
        const limit = usersOnPage;
        const offset = page * limit;

        dispatch(requestUsers(offset, limit));

        return loadUsers(offset, limit, searchText)
            .then(responseData => {
                dispatch(receiveUsers(offset, limit, responseData.data, responseData.recordsTotal));
                // if (offset >= responseData.recordsTotal) {
                //     dispatch(changePage(responseData.recordsTotal % limit));
                // }
            });
    };

