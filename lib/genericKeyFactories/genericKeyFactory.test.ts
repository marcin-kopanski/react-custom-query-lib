import { GenericKeyFactory } from "lib";
import { describe, expect, test } from "vitest";

const keyFactory = new GenericKeyFactory("test-factory");

describe("GenericKeyFactory tests", () => {
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
});
