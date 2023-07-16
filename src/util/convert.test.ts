import Convert from "./convert";

describe("Convert Utility", ()=>{
    it("convert valid json string to Json", ()=>{
        const jsonString = '{"abc":"xyz"}';
        expect(Convert.toJson(jsonString)).toEqual({abc:"xyz"});
    })

    it("convert invalid json string to null", ()=>{
        const invalidJsonString = '{abc:xyz}';
        expect(Convert.toJson(invalidJsonString)).toBeNull();
        expect(Convert.toJson("abc")).toBeNull();
    })
})