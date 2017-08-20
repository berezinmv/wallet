import React from "react";
import "./control-wrapper.css";

/**
 * Wrapper for controls
 * @param label         - control label
 * @param errorMessage  - error message
 * @param children
 * @constructor
 */
const ControlWrapper = ({label, errorMessage, children}) => (
    <div className="control-wrapper">
        <label className="control-wrapper__label">
            {label}
        </label>
        {children}
        <div className="control-wrapper__error">
            {errorMessage}
        </div>
    </div>
);
export default ControlWrapper;