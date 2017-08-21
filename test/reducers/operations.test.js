import {describe, it} from "mocha";
import {assert} from "chai";
import {receiveOperations} from "../../src/actions/fetch-operations";
import operations from "../../src/reducers/operations";

describe("reducers/operations", () => {

    it("should return new operations on 'RECEIVE_OPERATIONS'", () => {
        const user_id = "user_id";
        const from = "from";
        const to = "to";
        const operationsList = [{operation_id: "123"}, {operation_id: "456"}];
        const state = {};
        const action = receiveOperations(user_id, operationsList, from, to);
        assert.deepEqual(operations(state, action), operationsList);
    });
});