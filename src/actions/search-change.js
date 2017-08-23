import {fetchUsers} from "./fetch-users";
import createAction from "./create-action";

export const SEARCH_CHANGE = "SEARCH_CHANGE";

let timeout;

export const searchChange = (text: string) =>
    dispatch => {
        dispatch(createAction(SEARCH_CHANGE, {text}));

        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => dispatch(fetchUsers()), 200);
    };
