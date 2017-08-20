import axios from "axios";

export const host = "https://livedemo.xsolla.com/fe/test-task/baev";

export const request = (relativeUrl, method, data) =>
    axios.request({url: host + relativeUrl, method, responseType: "json", data}).then(response => response.data);
