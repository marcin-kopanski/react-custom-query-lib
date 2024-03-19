import { DataTableReducerState } from "lib/filterReducers/DataTableReducer/types";
import { GenericKey, GenericKeyFactory } from "lib/genericKeyFactories/genericKeyFactory";

export interface GenericDataTableKey extends GenericKey {
  tableData: DataTableReducerState;
}

export class GenericDataTableKeyFactory extends GenericKeyFactory {
  pageData(tableData: DataTableReducerState): GenericDataTableKey {
    return { ...this.list("page-data"), tableData } as const;
  }

  dataCount(): GenericKey {
    return { ...this.list("data-count") } as const;
  }
}
