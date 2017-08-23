import {connect} from "react-redux";
import type {State} from "../../reducers/state";
import {changePage} from "../../actions/change-page";
import Pager from "../../components/pager/pager";

const mapStateToProps = (state: State) => ({
    currentPage: state.usersPage
});

const mapDispatchToProps = dispatch => ({
    goToPage(page: number) {
        dispatch(changePage(page));
    }
});

const UsersPager = connect(mapStateToProps, mapDispatchToProps)(Pager);

export default UsersPager;