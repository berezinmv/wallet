import {connect} from "react-redux";
import List from "../../components/list/list";
import {selectUser} from "../../actions/select-user";

const mapStateToProps = state => ({items: state.users.map(u => ({name: u.user_name, id: u.user_id}))});

const mapDispatchToProps = dispatch => ({
    onClick(user_id: string) {
        dispatch(selectUser(user_id));
    }
});

const UserList = connect(mapStateToProps, mapDispatchToProps)(List);

export default UserList;