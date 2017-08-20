import {describe, it} from "mocha";
import {assert} from "chai";
import {selectUser} from "../../src/actions/select-user";
import selectedUser from "../../src/reducers/selected-user";

describe("reducers/selectedUser", () => {

    it("should set return user_id from 'SELECT_USER' action", () => {
        const state = "user_id1";
        const action = selectUser("user_id2");
        assert.equal(selectedUser(state, action), "user_id2");
    });
});