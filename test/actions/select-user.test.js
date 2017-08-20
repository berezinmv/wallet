import {describe, it} from "mocha";
import {assert} from "chai";
import {SELECT_USER, selectUser} from "../../src/actions/select-user";

describe("actions/selectUser", () => {

    it("should create action with type 'SELECT_USER' and payload field 'user_id'", () => {
        const action = selectUser("user_id1");
        assert.deepEqual(action, {
            type: SELECT_USER,
            payload: {
                user_id: "user_id1"
            }
        });
    });
});