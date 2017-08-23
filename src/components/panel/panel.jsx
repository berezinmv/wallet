import React from "react";
import "./panel.css";
import classNames from "classnames";

const Panel = ({children, className}) => (
    <div className={classNames("panel", className)}>
        {children}
    </div>
);

export default Panel;