import {post, postJson, postJsonData} from "./post";
import {Buffer} from "buffer";

describe("Post Request", ()=>{

    const postRequest = {
        url : "https://jsonplaceholder.typicode.com/posts",
        data : {
            "userId": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
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
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        const response = await postJsonData(postRequest.url, data);
        expect(response).toEqual(expect.objectContaining({
            userId: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String),
        }))
    })


})
