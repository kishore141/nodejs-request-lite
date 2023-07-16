import httpPostPromise from "../http-promise/http-post-promise";
import Convert from "../util/convert";
import {HttpBufferResponse, HttpJsonDataResponse, HttpJsonResponse} from "../types";

export const post = async (url: string, stringData: string, checkSsl: boolean = true, checkRedirect: boolean = true): Promise<HttpBufferResponse> => {
    return await httpPostPromise(url, stringData, checkSsl);
};

export const postJson = async (url: string, jsonData: object, checkSsl: boolean = true, checkRedirect: boolean = true): Promise<HttpJsonResponse> => {
    const response = await post(url, Convert.jsonToString(jsonData), checkSsl, checkRedirect);
    const {statusCode, headers, buffer} = response;
    return {statusCode, headers, json: Convert.bufferToJson(buffer)}
}

export const postJsonData = async (url: string, jsonData: object, checkSsl: boolean = true, checkRedirect: boolean = true): Promise<HttpJsonDataResponse> => {
    const response = await postJson(url, jsonData, checkSsl, checkRedirect);
    if (response && response.json) {
        return response.json;
    }
    return null;

}