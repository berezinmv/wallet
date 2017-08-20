import React, {Component} from "react";
import {connect} from "react-redux";
import {addUser} from "../../actions/add-user";
import Button from "../../components/controls/button/button";

const mapDispatchToProps = dispatch => ({
    onAdd(name: string) {
        dispatch(addUser(name));
    }
});

const NewUser = connect(undefined, mapDispatchToProps)(class extends Component {

    setInput = (input) => {
        this.input = input;
    };

    onClick = () => {
        this.props.onAdd(this.input.value);
        this.input.value = "";
    };

    render() {
        return (
            <div>
                <input ref={this.setInput} type="text"/>
                <Button label="add" onClick={this.onClick}/>
            </div>
        );
    }
});

export default NewUser;