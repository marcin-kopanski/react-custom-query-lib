import { GenericKeyFactory } from "lib";
import { expect, test } from "vitest";

test("test generic key factory element", () => {
  const keyFactory = new GenericKeyFactory("test-factory");

  expect(keyFactory.element("test-element")).toStrictEqual({
    baseName: "test-factory",
    type: "element",
    name: "test-element",
  });
});

test("test generic key factory list", () => {
  const keyFactory = new GenericKeyFactory("test-factory");

  expect(keyFactory.list("test-list")).toStrictEqual({
    baseName: "test-factory",
    type: "list",
    name: "test-list",
  });
});
