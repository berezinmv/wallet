import createAction from "./create-action";
import {dispatchAndFetchOperations} from "./fetch-operations";

export const CHANGE_FROM = "CHANGE_FROM";

export const CHANGE_TO = "CHANGE_TO";

export const changeFrom = (dateFrom: string) => dispatchAndFetchOperations(createAction(CHANGE_FROM, {dateFrom}));

export const changeTo = (dateTo: string) => dispatchAndFetchOperations(createAction(CHANGE_TO, {dateTo}));