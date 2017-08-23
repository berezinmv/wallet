import createAction from "./create-action";
import {fetchUsers} from "./fetch-users";

export const CHANGE_PAGE = "CHANGE_PAGE";

export const changePage = (page: number) =>
    (dispatch, getState) => {
        if (page !== getState().usersPage) {
            dispatch(createAction(CHANGE_PAGE, {page}));
            dispatch(fetchUsers());
        }
    };
