import createAction from "../create-action";
import getSelectedUser from "../../utils/get-selected-user";

export const EDIT_USER = "EDIT_USER";

export const editUser = () =>
    (dispatch, getState) => {
        const user = getSelectedUser(getState());
        if (user) {
            dispatch(createAction(EDIT_USER, {user}));
        }
    };

