import Validator from "../app.js";

const validator = new Validator();
test.each([
  ["1user", false],
  ["user12_", false],
  ["user1205ya", false],
  ["user12_bat", true],
])("Tasting the method validateUsername with %s name", (name, expected) => {
  const result = validator.validateUsername(name);
  expect(result).toBe(expected);
});
