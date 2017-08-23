import React from "react";
import {connect} from "react-redux";
import type {State} from "../../reducers/state";
import Column from "../../components/column-layout/column";

const mapStateToProps = (state: State) => ({});

const UserColumn = connect(mapStateToProps)(Column);

export default UserColumn;