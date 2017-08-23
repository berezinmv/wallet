import React from "react";
import {connect} from "react-redux";
import type {State} from "../../reducers/state";
import getSelectedUser from "../../utils/get-selected-user";
import "./user-information.css";

const mapStateToProps = (state: State) => {
    return {user: getSelectedUser(state)};
};

const mapDispatchToProps = dispatch => ({});

const UserInformation =
    connect(mapStateToProps, mapDispatchToProps())(({user: {user_name, email, user_custom, register_date, enabled, balance, wallet_amount, wallet_currency} = {}}) => (
        <div className="user-info">
            <p className="user-info__row">Name: <span className="user-info__value">{user_name}</span></p>
            <p className="user-info__row">Email: <span className="user-info__value">{email}</span></p>
            <p className="user-info__row">Custom: <span className="user-info__value">{user_custom}</span></p>
            <p className="user-info__row">Register date: <span
                className="user-info__value">{register_date && new Date(register_date).toLocaleDateString()}</span></p>
            <p className="user-info__row">Enabled: <span
                className="user-info__value">{enabled != null && (enabled ? "Yes" : "No")}</span></p>
            <p className="user-info__row">Balance: <span className="user-info__value">{balance}</span></p>
            <p className="user-info__row">Wallet amount: <span className="user-info__value">{wallet_amount}</span></p>
            <p className="user-info__row">Wallet currency: <span className="user-info__value">{wallet_currency}</span>
            </p>
        </div>
    ));

export default UserInformation;