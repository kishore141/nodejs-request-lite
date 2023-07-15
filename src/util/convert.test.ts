import Convert from "./convert";

describe("Convert Utility", ()=>{
    it("convert valid json string to Json", ()=>{
        const jsonString = '{"abc":"xyz"}';
        expect(Convert.toJson(jsonString)).toEqual({abc:"xyz"});
    })
})