import add from "./../string-calculator.js";

test("return 0 for an emoty string", () => {
  expect(add("")).toBe(0);
});
