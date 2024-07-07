import add from "./../string-calculator.js";

test("return 0 for an emoty string", () => {
  expect(add("")).toBe(0);
});

test("return number itself when single number as a string", () => {
  expect(add("1")).toBe(1);
});

test("return sum of two number", () => {
  expect(add("1,2")).toBe(3);
});
