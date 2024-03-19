import { DataTableActionType, dataTableReducer } from "lib";
import { describe, expect, test } from "vitest";

describe("dataTableReducer function tests", () => {
  test("is dataTableReducer a function", () => {
    expect(dataTableReducer).toBeTypeOf("function");
  });

  test("default state", () => {
    expect(dataTableReducer({ page: 0, pageSize: 50 })).toStrictEqual({
      page: 0,
      pageSize: 50,
    });
  });

  test("PageChange action", () => {
    expect(
      dataTableReducer(
        { page: 0, pageSize: 50 },
        { type: DataTableActionType.PageChange, payload: { page: 1, pageSize: 50 } },
      ),
    ).toStrictEqual({
      page: 1,
      pageSize: 50,
    });
  });
});
