import {
  DataTableActionType,
  DataTableReducer,
  DataTableReducerActions,
  DataTableReducerState,
} from "lib/filterReducers/DataTableReducer/types";

export const dataTableReducer: DataTableReducer = (
  state: DataTableReducerState,
  action: DataTableReducerActions,
): DataTableReducerState => {
  switch (action.type) {
    case DataTableActionType.PageChange:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
