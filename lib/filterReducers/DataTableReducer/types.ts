import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "lib/constants/tableDefaults";

export interface DataTableReducerState {
  page: number;
  pageSize: number;
}

export const DEFAULT_DATA_TABLE_REDUCER_STATE: DataTableReducerState = {
  page: DEFAULT_PAGE,
  pageSize: DEFAULT_PAGE_SIZE,
};

export type DataTableReducer = (
  state: DataTableReducerState,
  action?: DataTableReducerActions,
) => DataTableReducerState;

export enum DataTableActionType {
  PageChange = "PAGE_CHANGE",
}

type PageChangeAction = {
  type: DataTableActionType.PageChange;
  payload: { page: number; pageSize: number };
};

export type DataTableReducerActions = PageChangeAction;
