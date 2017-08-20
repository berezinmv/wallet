import {describe, it} from "mocha";
import {assert} from "chai";
import createAction from "../../src/actions/create-action";

describe("actions/createAction", () => {
    const actionType = "TEST_ACTION_TYPE";
    const payload = {};

    it("should create an action object passed type and payload", () => {
        const action = createAction(actionType, payload);
        assert.equal(action.type, actionType);
        assert.equal(action.payload, payload);
    });

    it("should set payload to empty object if it's not provided", () => {
        const action = createAction(actionType);
        assert.equal(action.type, actionType);
        assert.deepEqual(action.payload, {});
    });
});