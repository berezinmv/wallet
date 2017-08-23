import {connect} from "react-redux";
import type {State} from "../../reducers/state";
import Column from "../../components/column-layout/column";

const mapStateToProps = (state: State) => ({});

const OperationsColumn = connect(mapStateToProps)(Column);

export default OperationsColumn;