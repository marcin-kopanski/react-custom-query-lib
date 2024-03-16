import { dataTableReducer } from "lib/filterReducers/DataTableReducer/reducer";
import {
  FilteredDataTableActionTypes,
  FilteredDataTableReducer,
  FilteredDataTableReducerActions,
  FilteredDataTableReducerState,
} from "lib/filterReducers/FilteredDataTableReducer/types";

export const filteredDataTableReducer: FilteredDataTableReducer = <T_SELECTED_FILTERS_TYPE, T_FILTERS_DATA_TYPE>(
  state: FilteredDataTableReducerState<T_SELECTED_FILTERS_TYPE, T_FILTERS_DATA_TYPE>,
  action: FilteredDataTableReducerActions,
): FilteredDataTableReducerState<T_SELECTED_FILTERS_TYPE, T_FILTERS_DATA_TYPE> => {
  switch (action.type) {
    case FilteredDataTableActionTypes.SetFiltersData:
      return { ...state };

    case FilteredDataTableActionTypes.SelectAll:
      return { ...state };

    case FilteredDataTableActionTypes.Clear:
      return { ...state };

    case FilteredDataTableActionTypes.Apply:
      return { ...state, applyTimestamp: Date.now() };

    default:
      return { ...state, ...dataTableReducer(state.tableData, action) };
  }
};
