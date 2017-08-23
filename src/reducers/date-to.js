import {CHANGE_TO} from "../actions/change-dates";
import type {Action} from "../actions/action";
import moment from "moment";

const defaultDate = moment().add(1, "day").utc().format();

const dateTo = (state: string = defaultDate, action: Action) => {
    switch (action.type) {
        case CHANGE_TO:
            return action.payload.dateTo;
    }

    return state;
};

export default dateTo;