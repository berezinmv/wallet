import {describe, it} from "mocha";
import {assert} from "chai";
import {ADD_USER, addUser} from "../../src/actions/add-user"

describe("actions/addUser", () => {
    const name = "test user name";

    it("show create action with type ADD_USER and set 'name' property of payload to provided name", () => {
        const action = addUser(name);
        assert.equal(action.type, ADD_USER);
        assert.equal(action.payload.name, name);
    });
});