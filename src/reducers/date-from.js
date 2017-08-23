import {CHANGE_FROM} from "../actions/change-dates";
import type {Action} from "../actions/action";
import moment from "moment";

const defaultDate = moment().subtract(1, "month").utc().format();

const dateFrom = (state: string = defaultDate, action: Action) => {
    switch (action.type) {
        case CHANGE_FROM:
            return action.payload.dateFrom;
    }

    return state;
};

export default dateFrom;