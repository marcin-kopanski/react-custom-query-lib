import { GenericDataTableKeyFactory } from "lib";
import { describe, expect, test } from "vitest";

const keyFactory = new GenericDataTableKeyFactory("test-factory");

describe("GenericDataTableKeyFactory tests", () => {
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
});
