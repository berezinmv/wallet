import React from "react";
import {connect} from "react-redux";
import type {State} from "../../reducers/state";
import Modal from "../../components/modal/modal";
import {closeOperationModal} from "../../actions/operation-modal/close-operation-modal";
import OperationForm from "../operation-form/operation-form";

const mapStateToProps = (state: State) => ({
    isOpen: state.operationModal.operation != null,
    contentLabel: "Operation modal",
    children: <OperationForm/>
});

const mapDispatchToProps = dispatch => ({
    onRequestClose() {
        dispatch(closeOperationModal());
    }
});

const OperationModal = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default OperationModal;
