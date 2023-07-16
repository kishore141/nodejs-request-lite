import {post, postJson, postJsonData} from "./post";
import {Buffer} from "buffer";

describe("Post Request", ()=>{

    const postRequest = {
        url : "https://jsonplaceholder.typicode.com/posts",
        data : {
            "userId": 1,
            "title": "abc",
            "body": "abc"
        }
    }

    it("return a response with buffer for string request", async()=>{
        const response = await post(postRequest.url, "test");
        expect(response).toEqual(expect.objectContaining({
            statusCode: expect.any(Number),
            headers: expect.any(Object),
            buffer: expect.any(Buffer),
        }))
    })

    it("return a response with json for json request", async()=>{
        const response = await postJson(postRequest.url, postRequest.data);
        expect(response).toEqual(expect.objectContaining({
            statusCode: expect.any(Number),
            headers: expect.any(Object),
            json: expect.any(Object),
        }))
    })

    it("return a json for json data request", async()=>{
        const response = await postJsonData(postRequest.url, postRequest.data);
        expect(response).toEqual(expect.any(Object));
    })

    it("return a valid json for valid json data request", async()=>{
        const data = {
            "userId": 1,
                "title": "abc",
                "body": "abc\n abc\n abc"
        }
        const response = await postJsonData(postRequest.url, data);
        expect(response).toEqual(expect.objectContaining({
            userId: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String),
        }))
    })


})
