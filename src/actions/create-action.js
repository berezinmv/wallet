import type {Action} from "./action";

function createAction<T>(type: string, payload: T = {}): Action<T> {
    return {type, payload};
}

export default createAction;