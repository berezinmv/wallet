import {describe, it} from "mocha";
import {assert} from "chai";
import {receiveOperations, requestOperations} from "../../src/actions/fetch-operations";
import {onReceiveOperations, onRequestOperations} from "../../src/reducers/operations";

describe("reducers/operations", () => {

    describe("onRequestOperations", () => {

        it("should set non existing operations info", () => {
            const user_id = "user_id";
            const from = "from";
            const to = "to";
            const state = {};
            const action = requestOperations(user_id, from, to);
            assert.deepEqual(onRequestOperations(state, action), {
                [user_id]: {
                    data: undefined, from, to, isFetching: true
                }
            });
        });

        it("should replace existing operations info", () => {
            const user_id = "user_id";
            const from = "from";
            const to = "to";
            const state = {[user_id]: {data: [], from: "123", to: "456", isFetching: true}};
            const action = requestOperations(user_id, from, to);
            assert.deepEqual(onRequestOperations(state, action), {
                [user_id]: {
                    data: undefined, from, to, isFetching: true
                }
            });
        });
    });

    describe("onReceiveOperations", () => {

        it("should set non existing operations info", () => {
            const user_id = "user_id";
            const from = "from";
            const to = "to";
            const operations = [{operation_id: "123"}, {operation_id: "456"}];
            const state = {};
            const action = receiveOperations(user_id, operations, from, to);
            assert.deepEqual(onReceiveOperations(state, action), {
                [user_id]: {
                    data: operations, from, to, isFetching: false
                }
            });
        });

        it("should replace existing operations info if 'from' and 'to' are equal and 'isFetching' is true", () => {
            const user_id = "user_id";
            const from = "from";
            const to = "to";
            const operations = [{operation_id: "123"}, {operation_id: "456"}];
            const state = {[user_id]: {data: [{operation_id: "789"}], from, to, isFetching: true}};
            const action = receiveOperations(user_id, operations, from, to);
            assert.deepEqual(onReceiveOperations(state, action), {
                [user_id]: {
                    data: operations, from, to, isFetching: false
                }
            });
        });

        it("should return existing operations info if 'from' and 'to' aren't equal or 'isFetching' is false", () => {
            const user_id = "user_id";
            const from = "from";
            const to = "to";
            const operations = [{operation_id: "123"}, {operation_id: "456"}];
            const state = {[user_id]: {data: [{operation_id: "789"}], from: "123", to: "456", isFetching: true}};
            const action = receiveOperations(user_id, operations, from, to);
            assert.deepEqual(onReceiveOperations(state, action), state);

            const state2 = {[user_id]: {data: [{operation_id: "789"}], from, to, isFetching: false}};
            assert.deepEqual(onReceiveOperations(state2, action), state2);
        });
    });
});