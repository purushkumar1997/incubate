const addString = require("../src/calculator");

test("It will return 0 if an empty string", () => {
    expect(addString("")).toBe(0);
})