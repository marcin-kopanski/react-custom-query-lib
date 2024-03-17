import { DataTableReducerState } from "lib/filterReducers/DataTableReducer/types";
import { GenericKey, GenericKeyFactory } from "lib/genericKeyFactories/genericKeyFactory";

export interface GenericDataTableKey extends GenericKey {
  filter: DataTableReducerState;
}

export class GenericDataTableKeyFactory extends GenericKeyFactory {
  pageData(filter: DataTableReducerState): GenericDataTableKey {
    return { ...this.list("page-data"), filter } as const;
  }

  dataCount(): GenericKey {
    return { ...this.list("data-count") } as const;
  }
}

// export const genericDataTableKeyFactory = (domain: string) => ({
//   ...genericKeyFactory(domain),
//   pageData: (filter: DataTableReducerState) =>
//     [{ ...genericKeyFactory(domain).list(), name: "page-data", filter }] as const,
//   dataCount: () => [{ ...genericKeyFactory(domain).list(), name: "data-count" }] as const,
// });
