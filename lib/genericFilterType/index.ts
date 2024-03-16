import { DataTableReducerState } from "lib/filterReducers/DataTableReducer/types";

export interface BaseDataTableState extends DataTableReducerState {
  applyTimestamp?: number;
}

export interface FilteredDataTableState<T_EXTENDED_FILTERS_TYPE = void> extends BaseDataTableState {
  selectedFilters: T_EXTENDED_FILTERS_TYPE;
}

export interface FilterRow {
  id: number;
  value: string;
}
