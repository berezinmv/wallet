import {ADD_NEW_OPERATION} from "../../actions/operation-modal/add-new-operation";
import {CLOSE_OPERATION_MODAL} from "../../actions/operation-modal/close-operation-modal";
import {CHANGE_OPERATION_FIELD} from "../../actions/operation-modal/change-operation-field";

const operation = (state: { comment: string, amount: number } = null, action) => {
    switch (action.type) {
        case ADD_NEW_OPERATION:
            return {};
        case CHANGE_OPERATION_FIELD:
            const {field, value} = action.payload;
            return {...state, [field]: value};
        case CLOSE_OPERATION_MODAL:
            return null;
    }

    return state;
};

export default operation;