import {afterEach, beforeEach, describe, it} from "mocha";
import thunkMiddleware from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {assert} from "chai";
import nock from "nock";
import {host} from "../../src/api/request";
import {createUrl} from "../../src/api/load-users";
import {fetchUsers, RECEIVE_USERS, receiveUsers, REQUEST_USERS, requestUsers} from "../../src/actions/fetch-users";

const mockStore = configureMockStore([thunkMiddleware]);

describe("actions/fetchUsers", () => {
    let store;

    const nockClear = () => {
        nock.cleanAll();
    };

    beforeEach(() => {
        nockClear();
        store = mockStore({usersPage: 0});
    });

    afterEach(nockClear);

    it("creates 'REQUEST_USERS' (always) and 'RECEIVE_USERS' (when fetching has been done)", () => {
        const users = [{user_name: "user1", user_id: "id1"}];
        const offset = 0;
        const limit = 20;
        nock(host).get(createUrl(offset, limit))
            .reply(200, {data: users, recordsTotal: 1});

        const expectedActions = [
            requestUsers(offset, limit),
            receiveUsers(offset, limit, users, 1)
        ];

        return store.dispatch(fetchUsers(offset, limit))
            .then(() => assert.deepEqual(store.getActions(), expectedActions));
    });

    describe("requestUsers", () => {

        it("creates an action with type 'REQUEST_USERS' and payload with fields 'offset' and 'limit'", () => {
            const action = requestUsers(5, 22);
            assert.deepEqual(action, {
                type: REQUEST_USERS,
                payload: {
                    offset: 5,
                    limit: 22
                }
            });
        });
    });

    describe("receiveUsers", () => {

        it("creates an action with type 'REQUEST_USERS' and payload with fields 'offset', 'limit', 'users' and 'total'", () => {
            const action = receiveUsers(7, 12, [{user_name: "user1", user_id: "id1"}, {
                user_name: "user2",
                user_id: "id2"
            }], 2);
            assert.deepEqual(action, {
                type: RECEIVE_USERS,
                payload: {
                    offset: 7,
                    limit: 12,
                    users: [{user_name: "user1", user_id: "id1"}, {user_name: "user2", user_id: "id2"}],
                    total: 2
                }
            });
        });
    });
});
