import { divide } from "../src/calculator.js";

describe("divide", () => {
    test("returns division result for valid numbers", () => {
        expect(divide(6, 3)).toBe(2);
    });

    test("throws TypeError when first argument is not a number", () => {
        expect(() => divide("6", 3)).toThrow(TypeError);
        expect(() => divide("6", 3)).toThrow("Both arguments must be numbers");
    });

    test("throws TypeError when second argument is not a number", () => {
        expect(() => divide(6, "3")).toThrow(TypeError);
        expect(() => divide(6, "3")).toThrow("Both arguments must be numbers");
    });

    test("throws TypeError when first argument is NaN", () => {
        expect(() => divide(Number.NaN, 3)).toThrow(TypeError);
        expect(() => divide(Number.NaN, 3)).toThrow("Arguments cannot be NaN");
    });

    test("throws TypeError when second argument is NaN", () => {
        expect(() => divide(6, Number.NaN)).toThrow(TypeError);
        expect(() => divide(6, Number.NaN)).toThrow("Arguments cannot be NaN");
    });

    test("throws RangeError for division by zero", () => {
        expect(() => divide(6, 0)).toThrow(RangeError);
        expect(() => divide(6, 0)).toThrow("Division by zero is not allowed");
    });
});
