import Convert from "./convert";

describe("Convert Utility", ()=>{
    it("convert valid json string to Json", ()=>{
        const jsonString = '{"abc":"xyz"}';
        expect(Convert.stringToJson(jsonString)).toEqual({abc:"xyz"});
    })

    it("convert invalid json string to null", ()=>{
        const invalidJsonString = '{abc:xyz}';
        expect(Convert.stringToJson(invalidJsonString)).toBeNull();
        expect(Convert.stringToJson("abc")).toBeNull();
    })

    it("convert valid json to string", () => {
        const validJson = {abc:"xyz"};
        expect(Convert.jsonToString(validJson)).toBe('{"abc":"xyz"}');
    })

    it("convert invalid json to string", () => {
        // @ts-ignore
        expect(Convert.jsonToString("abc")).toBeNull();
    })

    it("convert invalid json buffer to json object", () => {
        const invalidJsonBuffer = Buffer.from("abc");
        expect(Convert.bufferToJson(invalidJsonBuffer)).toBeNull();
    })

    it("convert invalid json buffer to json object", () => {
        const validJsonBuffer = Buffer.from('{"abc":"xyz"}');
        expect(Convert.bufferToJson(validJsonBuffer)).toEqual({abc: "xyz"});
    })
})