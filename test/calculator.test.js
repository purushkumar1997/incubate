const addString = require("../src/calculator");

test("It will return 0 if an empty string", () => {
    expect(addString("")).toBe(0);
})

test("It will return single number if there is a single number", () => {
    expect(addString("7")).toBe(7);
})