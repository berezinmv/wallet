import {beforeEach, describe, it} from "mocha";
import {assert} from "chai";
import users from "../../src/reducers/users";
import {receiveUsers} from "../../src/actions/fetch-users";

describe("reducers/users", () => {
    let userList;

    beforeEach(() => {
        userList = [{name: "user1", id: 0}];
    });

    it("returns new user collection on 'RECEIVE_USERS' action", () => {
        const newCollection = [];
        assert.deepEqual(
            users(userList, receiveUsers(0, 0, newCollection, 0)),
            newCollection
        );
    });
});
