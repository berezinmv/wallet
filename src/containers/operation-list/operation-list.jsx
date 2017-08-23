import React, {Component} from "react";
import {connect} from "react-redux";
import type {Operation} from "../../domain/operation";
import List from "../../components/list/list";
import Loading from "../../components/loading/loading";
import type {State} from "../../reducers/state";
import "./operation-list.css";

const matStateToProps = (state: State) => ({
    user_id: state.selectedUser,
    operations: state.operations,
    fetchingOperations: state.fetchingOperations
});

const mapDispatchToProps = dispatch => ({});

const renderOperation = ({comment, date, amount, currency}: Operation) => (
    <div className="operation-list-item">
        <table>
            <tbody>
            <tr>
                <td>Comment: <span className="value">{comment}</span></td>
                <td style={{textAlign: "right"}}>Amount: <span className="value">{amount}</span></td>
            </tr>
            <tr>
                <td>Date: <span className="value">{new Date(date).toLocaleString()}</span></td>
                <td style={{textAlign: "right"}}>Currency: <span className="value">{currency}</span></td>
            </tr>
            </tbody>
        </table>
        <hr/>
    </div>
);

const getOperationId = (operation: Operation) => operation.operation_id;
const getOperationName = (operation: Operation) => operation.comment;

const OperationList = connect(matStateToProps, mapDispatchToProps)(class extends Component {

    getItems() {
        return (this.props.operations || [])
            .map((operation: Operation) => ({...operation, id: operation.operation_id}));
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
                {this.props.fetchingOperations
                    ? <Loading/>
                    : <List renderItem={renderOperation} items={this.getItems()}
                            getId={getOperationId} getName={getOperationName}/>}
            </div>
        );
    }
});

export default OperationList;