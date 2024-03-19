import { DataTableReducerState } from "lib/filterReducers/DataTableReducer/types";
import { GenericDataTableKey, GenericDataTableKeyFactory } from "lib/genericKeyFactories/genericDataTableKeyFactory";
import { GenericKey } from "lib/genericKeyFactories/genericKeyFactory";

export interface FilteredDataTableKey<T_SELECTED_FILTERS_TYPE> {
  filter: T_SELECTED_FILTERS_TYPE;
}

export interface GenericFilteredDataTableKey<T_SELECTED_FILTERS_TYPE>
  extends GenericDataTableKey,
    FilteredDataTableKey<T_SELECTED_FILTERS_TYPE> {}

export class GenericFilteredDataTableKeyFactory<T_SELECTED_FILTERS_TYPE> extends GenericDataTableKeyFactory {
  dataForFilters(): GenericKey {
    return { ...this.list("data-for-filters") } as const;
  }

  pageDataByFilter(
    tableData: DataTableReducerState,
    filter: T_SELECTED_FILTERS_TYPE,
  ): GenericFilteredDataTableKey<T_SELECTED_FILTERS_TYPE> {
    return { ...super.pageData(tableData), filter } as const;
  }

  dataCountByFilter(filter: T_SELECTED_FILTERS_TYPE): FilteredDataTableKey<T_SELECTED_FILTERS_TYPE> {
    return { ...super.dataCount(), filter } as const;
  }
}
