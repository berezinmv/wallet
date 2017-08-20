import React, {Component} from "react";
import {connect} from "react-redux";
import type {Operation} from "../../domain/operation";
import {fetchOperations} from "../../actions/fetch-operations";
import List from "../../components/list/list";
import Loading from "../../components/loading/loading";

const matStateToProps = (state, ownProps) => {
    const user_id = ownProps.user_id;
    const userOperations = state.operations[user_id] || {};
    const {data, isFetching, from = "2016-10-14T00:00:00Z", to = "2017-08-20T00:00:00Z"} = userOperations;
    return {operations: data, isFetching, user_id, from, to};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadOperations(user_id, from, to) {
        if (user_id) {
            dispatch(fetchOperations(user_id, from, to));
        }
    }
});

const OperationList = connect(matStateToProps, mapDispatchToProps)(class extends Component {

    componentDidMount() {
        this.requestOperationsIfNeeded(this.props);
    }

    componentWillReceiveProps(props) {
        this.requestOperationsIfNeeded(props);
    }

    needRequestOperations(props) {
        return !props.operations && !props.isFetching;
    }

    requestOperationsIfNeeded(props) {
        if (this.needRequestOperations(props)) {
            this.props.loadOperations(props.user_id, props.from, props.to);
        }
    }

    getItems() {
        return (this.props.operations || [])
            .map((operation: Operation) => ({id: operation.operation_id, name: operation.comment}));
    }

    render() {
        if (this.props.isFetching) {
            return <Loading/>;
        }
        return (
            <List items={this.getItems()}/>
        );
    }
});

export default OperationList;