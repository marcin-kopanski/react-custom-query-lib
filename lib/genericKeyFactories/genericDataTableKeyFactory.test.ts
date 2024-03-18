import { GenericDataTableKeyFactory } from "lib";
import { expect, test } from "vitest";

test("test generic key factory element", () => {
  const keyFactory = new GenericDataTableKeyFactory("test-factory");

  expect(keyFactory.element("test-element")).toStrictEqual({
    baseName: "test-factory",
    type: "element",
    name: "test-element",
  });
});
