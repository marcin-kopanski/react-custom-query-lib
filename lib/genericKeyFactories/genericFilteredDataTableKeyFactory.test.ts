import { GenericFilteredDataTableKeyFactory } from "lib";
import { describe, expect, test } from "vitest";

interface TestFilterType {
  selectedIds: number[];
}
const keyFactory = new GenericFilteredDataTableKeyFactory<TestFilterType>("test-factory");

describe("GenericFilteredDataTableKeyFactory tests", () => {
  test("element key", () => {
    expect(keyFactory.element("test-element")).toStrictEqual({
      baseName: "test-factory",
      type: "element",
      name: "test-element",
    });
  });

  test("list key", () => {
    expect(keyFactory.list("test-list")).toStrictEqual({
      baseName: "test-factory",
      type: "list",
      name: "test-list",
    });
  });

  test("pageData key", () => {
    expect(keyFactory.pageData({ page: 0, pageSize: 50 })).toStrictEqual({
      baseName: "test-factory",
      type: "list",
      name: "page-data",
      tableData: { page: 0, pageSize: 50 },
    });
  });

  test("dataCount key", () => {
    expect(keyFactory.dataCount()).toStrictEqual({
      baseName: "test-factory",
      type: "list",
      name: "data-count",
    });
  });

  test("pageData key", () => {
    expect(keyFactory.pageData({ page: 0, pageSize: 50 })).toStrictEqual({
      baseName: "test-factory",
      type: "list",
      name: "page-data",
      tableData: { page: 0, pageSize: 50 },
    });
  });

  test("dataForFilters key", () => {
    expect(keyFactory.dataForFilters()).toStrictEqual({
      baseName: "test-factory",
      type: "list",
      name: "data-for-filters",
    });
  });

  test("pageDataByFilter key", () => {
    expect(keyFactory.pageDataByFilter({ page: 0, pageSize: 50 }, { selectedIds: [1, 2] })).toStrictEqual({
      baseName: "test-factory",
      type: "list",
      name: "page-data",
      tableData: { page: 0, pageSize: 50 },
      filter: { selectedIds: [1, 2] },
    });
  });

  test("dataCountByFilter key", () => {
    expect(keyFactory.dataCountByFilter({ selectedIds: [1, 2] })).toStrictEqual({
      baseName: "test-factory",
      type: "list",
      name: "data-count",
      filter: { selectedIds: [1, 2] },
    });
  });
});
