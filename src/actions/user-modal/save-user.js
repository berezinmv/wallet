import uuid from "uuid/v4";
import createNewUser from "../../api/create-new-user";
import updateUser from "../../api/update-user";
import {userUpdated} from "../user-updated";
import {closeUserModal} from "./close-user-modal";

export const SAVE_USER = "SAVE_USER";

export const saveUser = () =>
    (dispatch, getState) => {
        const state = getState();
        let user = state.userModal.user;
        const isNew = user.user_id == null;
        if (isNew) {
            user = {...user, user_id: uuid()};
        }
        const savePromise = isNew ? createNewUser(user) : updateUser(user);
        savePromise.then(() => {
            dispatch(userUpdated(user));
            dispatch(closeUserModal());
        });
    };