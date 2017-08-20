import "./polyfills";
import Root from "./root";

import React from "react";
import ReactDOM from "react-dom";

const appContainer = document.createElement("div");
document.body.appendChild(appContainer);

ReactDOM.render(React.createElement(Root), appContainer);