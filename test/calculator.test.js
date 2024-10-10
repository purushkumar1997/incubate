const addString = require("../src/calculator");

test("It will return 0 if an empty string", () => {
    expect(addString("")).toBe(0);
})

test("It will return single number if there is a single number", () => {
    expect(addString("7")).toBe(7);
})

test("It will return sum of two numbers given as comma seperated string", () => {
    expect(addString("4,5")).toBe(9);
})

test("It will return sum of more numbers given as comma seperated string", () => {
    expect(addString("4,5,10,34")).toBe(53);
})

test("It will give sum of numbers if new line will get introduced in string as input", () => {
    expect(addString("4\n5,3")).toBe(12);
})

test("It will handle custom delimiters", () => {
    expect(addString("//;\n1;2")).toBe(3);
})