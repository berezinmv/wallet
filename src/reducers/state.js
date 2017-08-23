import type {User} from "../domain/user";
import type {Operation} from "../domain/operation";

export type State = {
    userModal: {
        user: User;
    }

    operationModal: {
        operation: {
            comment: string;
            amount: number;
        }
    }

    usersPage: number;

    usersSearch: string;

    users: Array<User>;

    selectedUser: string;

    dateFrom: string;

    dateTo: string;

    operations: Array<Operation>;

    fetchingOperations: boolean;
}