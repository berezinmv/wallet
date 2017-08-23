import saveOperation from "../../api/save-operation";
import {dispatchAndFetchOperations} from "../fetch-operations";
import {userUpdated} from "../user-updated";
import {closeOperationModal} from "./close-operation-modal";

export const saveNewOperation = () =>
    (dispatch, getState) => {
        const {selectedUser: user_id, operationModal: {operation}} = getState();
        if (user_id && operation) {
            saveOperation(user_id, operation).then(user => {
                dispatch(userUpdated(user));
                dispatch(dispatchAndFetchOperations(closeOperationModal()));
            });
        }
    };