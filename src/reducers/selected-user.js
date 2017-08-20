import {SELECT_USER} from "../actions/select-user";

const selectedUser = (state: string = null, action) => {
    switch (action.type) {
        case SELECT_USER:
            return action.payload.user_id || null;
    }

    return state;
};

export default selectedUser;