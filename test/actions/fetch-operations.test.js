import {afterEach, beforeEach, describe, it} from "mocha";
import thunkMiddleware from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {assert} from "chai";
import nock from "nock";
import {host} from "../../src/api/request";
import {createUrl} from "../../src/api/load-operations";
import {
    fetchOperations,
    RECEIVE_OPERATIONS,
    receiveOperations,
    REQUEST_OPERATIONS,
    requestOperations
} from "../../src/actions/fetch-operations";

const mockStore = configureMockStore([thunkMiddleware]);

describe("actions/fetchOperations", () => {
    let store;

    const nockClear = () => {
        nock.cleanAll();
    };

    beforeEach(() => {
        nockClear();
        store = mockStore({});
    });

    afterEach(nockClear);

    it("creates 'REQUEST_OPERATIONS' (always) and 'RECEIVE_OPERATIONS' (when fetching has been done)", () => {
        const user_id = "user_id1";
        const from = "from1";
        const to = "to1";
        const operations = [{operation_id: "id1", user_id: user_id}];
        nock(host).get(createUrl(user_id, from, to))
            .reply(200, operations);

        const expectedActions = [
            requestOperations(user_id, from, to),
            receiveOperations(user_id, operations, from, to)
        ];

        return store.dispatch(fetchOperations(user_id, from, to))
            .then(() => assert.deepEqual(store.getActions(), expectedActions));
    });

    describe("requestOperations", () => {

        it("creates action with type 'REQUEST_OPERATIONS' and payload fields 'user_id', 'from' and 'to'", () => {
            const user_id = "user_id1";
            const from = "from1";
            const to = "to1";
            assert.deepEqual(requestOperations(user_id, from, to), {
                type: REQUEST_OPERATIONS,
                payload: {user_id, from, to}
            });
        });
    });


    describe("receiveOperations", () => {
        it("creates action with type 'RECEIVE_OPERATIONS' and payload fields 'user_id', 'operations', 'from' and 'to'", () => {
            const user_id = "user_id1";
            const operations = [{operation_id: "123"}, {operation_id: "456"}];
            const from = "from1";
            const to = "to1";
            assert.deepEqual(receiveOperations(user_id, operations, from, to), {
                type: RECEIVE_OPERATIONS,
                payload: {user_id, operations, from, to}
            });
        });
    });
});