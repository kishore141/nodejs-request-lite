import {get, getJson, getJsonData} from "./get";
import {Buffer} from "buffer";

describe("Get Request", ()=>{

    const request = {
        url : "https://jsonplaceholder.typicode.com/posts"
    }

    it("return a response with buffer for string request", async()=>{
        const response = await get(request.url);
        expect(response).toHaveProperty("statusCode");
        expect(response).toHaveProperty("headers");
        expect(response).toHaveProperty("buffer");
        expect(response).toEqual(expect.objectContaining({
            statusCode: expect.any(Number),
            headers: expect.any(Object),
            buffer: expect.any(Buffer),
        }))
    })

    it("return a response with json for json request", async()=>{
        const response = await getJson(request.url);
        expect(response).toEqual(expect.objectContaining({
            statusCode: expect.any(Number),
            headers: expect.any(Object),
            json: expect.any(Object),
        }))
    })

    it("return a json for json data request", async()=>{
        const response = await getJsonData(request.url);
        expect(response).toEqual(expect.any(Object));
    })
})
