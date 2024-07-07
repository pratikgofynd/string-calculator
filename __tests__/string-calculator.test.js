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

test("return sum of multiple numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("return sum of numbers separated by commas along with new lines", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("return sum of numbers with a custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});
