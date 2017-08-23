import type {Action} from "../actions/action";
import {CHANGE_PAGE} from "../actions/change-page";

const usersPage = (state: number = 0, action: Action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.payload.page;
    }

    return state;
};

export default usersPage;