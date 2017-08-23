import type {User} from "../../domain/user";
import type {Action} from "../../actions/action";
import {CREATE_USER} from "../../actions/user-modal/create-user";
import {EDIT_USER} from "../../actions/user-modal/edit-user";
import {CLOSE_USER_MODAL} from "../../actions/user-modal/close-user-modal";
import {CHANGE_USER_MODAL_FIELD} from "../../actions/user-modal/change-user-modal-field";

const user = (state: User = null, action: Action) => {
    switch (action.type) {
        case CREATE_USER:
            return {};
        case EDIT_USER:
            return {...action.payload.user};
        case CHANGE_USER_MODAL_FIELD:
            if (state != null) {
                const {field, value} = action.payload;
                return {...state, [field]: value};
            }
            break;
        case CLOSE_USER_MODAL:
            return null;
    }

    return state;
};

export default user;