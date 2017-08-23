import {connect} from "react-redux";
import type {State} from "../../reducers/state";
import * as React from "react";
import {saveNewOperation} from "../../actions/operation-modal/save-new-operation";
import {closeOperationModal} from "../../actions/operation-modal/close-operation-modal";
import Button from "../../components/controls/button/button";
import Input from "../../components/controls/input/input";
import InputText from "../../components/controls/input-text/input-text";
import {changeOperationField} from "../../actions/operation-modal/change-operation-field";

const mapStateToProps = (state: State) => ({
    operation: state.operationModal.operation
});

const mapDispatchToProps = dispatch => ({
    onSave() {
        dispatch(saveNewOperation());
    },

    onClose() {
        dispatch(closeOperationModal());
    },

    changeComment(value: string) {
        dispatch(changeOperationField("comment", value));
    },

    changeAmount(value: string) {
        if (value === "") {
            return dispatch(changeOperationField("amount", value));
        }
        let parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
            parsedValue = 0;
        }
        dispatch(changeOperationField("amount", parsedValue));
    }
});

const requiredValidator = (value) => !value ? "Required" : undefined;

const OperationForm =
    connect(mapStateToProps, mapDispatchToProps)(({operation: {amount = "", comment = ""} = {}, onSave, onClose, changeComment, changeAmount}) =>
        <div>
            <InputText label="Comment" value={comment} onChange={changeComment} validator={requiredValidator}/>
            <Input label="Amount" type="number" value={amount} onChange={changeAmount} validator={requiredValidator}/>
            <Button label="Save" onClick={onSave}
                    disabled={comment === "" || amount === "" || amount == null || amount === 0}/>
            &nbsp;
            <Button label="Close" onClick={onClose}/>
        </div>
    );

export default OperationForm;