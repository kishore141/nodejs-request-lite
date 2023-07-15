import Check from "./check";

describe("Check Utility", () => {
    it("should return true for valid json string", () => {
        const jsonString = '{"abc":"xyz"}';
        expect(Check.isJsonString(jsonString)).toBe(true);
    });
    it("should return false for invalid json string", () => {
        const jsonString = "abc";
        expect(Check.isJsonString(jsonString)).toBe(false);
    });
});