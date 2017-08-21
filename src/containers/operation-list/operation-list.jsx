import React, {Component} from "react";
import {connect} from "react-redux";
import type {Operation} from "../../domain/operation";
import List from "../../components/list/list";
import Loading from "../../components/loading/loading";

const matStateToProps = state => ({
    operations: state.operations,
    fetchingOperations: state.fetchingOperations,
    user_id: state.selectedUser,
    from: state.dateFrom,
    to: state.dateTo
});

const mapDispatchToProps = dispatch => ({});

const OperationList = connect(matStateToProps, mapDispatchToProps)(class extends Component {

    getItems() {
        return (this.props.operations || [])
            .map((operation: Operation) => ({id: operation.operation_id, name: operation.comment}));
    }

    onChangeFrom = (value: string) => {
    };

    onChangeTo = (value: string) => {
    };

    render() {
        if (!this.props.user_id) {
            return (<span/>);
        }
        return (
            <div>
                {this.props.fetchingOperations ? <Loading/> : <List items={this.getItems()}/>}
            </div>
        );
    }
});

export default OperationList;