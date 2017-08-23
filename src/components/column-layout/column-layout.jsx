import React from "react";
import "./column-layout.css";

const ColumnLayout = ({children}) => (
    <div className="column-layout">
        {children}
    </div>
);

export default ColumnLayout;