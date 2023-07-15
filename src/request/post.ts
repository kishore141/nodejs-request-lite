import httpPostPromise from "../http-promise/http-post-promise";
import Convert from "../util/convert";
import {HttpBufferResponse, HttpJsonDataResponse, HttpJsonResponse} from "../types";

export const post = async (url: string, data: string, checkSsl: boolean = true, checkRedirect: boolean = true): Promise<HttpBufferResponse> => {
    return await httpPostPromise(url, data);
};

export const postJson = async (url: string, data: object, checkSsl: boolean = true, checkRedirect: boolean = true):Promise<HttpJsonResponse> => {
    const response = await post(url, JSON.stringify(data), checkSsl, checkRedirect);
    const { statusCode, headers, buffer } = response;
    return {statusCode, headers, json: Convert.toJson(buffer.toString())}
}

export const postJsonData = async (url: string,data:object, checkSsl: boolean = true, checkRedirect: boolean = true):Promise<HttpJsonDataResponse> => {
    const response = await postJson(url,data, checkSsl, checkRedirect);
    if(response && response.json){
        return response.json;
    }
    return null;

}