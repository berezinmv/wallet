import type {State} from "../reducers/state";

export default function getSelectedUser(state: State) {
    const {users, selectedUser} = state;
    return users.find(user => user.user_id === selectedUser);
}