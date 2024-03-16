import {
  DataTableActionType,
  DataTableReducerActions,
  DataTableReducerState,
} from "lib/filterReducers/DataTableReducer/types";

export interface FilteredDataTableReducerState<T_SELECTED_FILTERS_TYPE, T_FILTERS_DATA_TYPE> {
  tableData: DataTableReducerState;
  selectedFilters?: T_SELECTED_FILTERS_TYPE;
  filterData?: T_FILTERS_DATA_TYPE;
  applyTimestamp?: number;
}

export type FilteredDataTableReducer = <T_SELECTED_FILTERS_TYPE, T_FILTERS_DATA_TYPE>(
  state: FilteredDataTableReducerState<T_SELECTED_FILTERS_TYPE, T_FILTERS_DATA_TYPE>,
  action: FilteredDataTableReducerActions,
) => FilteredDataTableReducerState<T_SELECTED_FILTERS_TYPE, T_FILTERS_DATA_TYPE>;

enum FilteredDataTableActionsEnum {
  SetFiltersData = "SET_FILTERS_DATA",
  SelectAll = "SELECT_ALL",
  Clear = "CLEAR",
  Apply = "APPLY",
}

export const FilteredDataTableActionTypes = {
  ...DataTableActionType,
  ...FilteredDataTableActionsEnum,
};
type FilteredDataTableActionType = typeof FilteredDataTableActionTypes;

export type SetFiltersDataAction = {
  type: FilteredDataTableActionType["SetFiltersData"];
  payload: object[];
};

export type SelectAllAction = {
  type: FilteredDataTableActionType["SelectAll"];
};

export type ClearAction = {
  type: FilteredDataTableActionType["Clear"];
};

export type ApplyAction = {
  type: FilteredDataTableActionType["Apply"];
};

export type FilteredDataTableReducerActions =
  | DataTableReducerActions
  | SetFiltersDataAction
  | SelectAllAction
  | ClearAction
  | ApplyAction;
