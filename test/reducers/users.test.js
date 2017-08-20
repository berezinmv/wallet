import {beforeEach, describe, it} from "mocha";
import {assert} from "chai";
import users from "../../src/reducers/users";
import {addUser} from "../../src/actions/add-user";
import {receiveUsers} from "../../src/actions/fetch-users";

describe("reducers/users", () => {
    let userList;

    beforeEach(() => {
        userList = [{name: "user1", id: 0}];
    });

    it("adds ne user to collection on 'ADD_USER' action", () => {
        assert.deepEqual(
            users(userList, addUser("user2")),
            userList.concat({name: "user2", id: 1})
        );
    });

    it("returns new user collection on 'RECEIVE_USERS' action", () => {
        const newCollection = [];
        assert.deepEqual(
            users(userList, receiveUsers(0, 0, newCollection, 0)),
            newCollection
        );
    });
});
