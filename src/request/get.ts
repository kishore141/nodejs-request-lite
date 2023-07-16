import httpGetPromise from "../http-promise/http-get-promise";
import Convert from "../util/convert";
import {HttpBufferResponse, HttpJsonDataResponse, HttpJsonResponse} from "../types";

export const get = async (url: string, checkSsl: boolean = true, checkRedirect: boolean = true): Promise<HttpBufferResponse> => {
    const response = await httpGetPromise(url, checkSsl);
    const { statusCode, headers } = response;
    const isRedirectCode = statusCode === 301 || statusCode ===302 || statusCode === 307 || statusCode === 308;
    const isHeaderLocation = headers && headers.location;
    if (checkRedirect && isRedirectCode && isHeaderLocation && headers.location !== undefined) {
        return await httpGetPromise(headers.location, checkSsl);
    } else {
        return response;
    }
};

export const getJson = async (url: string, checkSsl: boolean = true, checkRedirect: boolean = true):Promise<HttpJsonResponse> => {
    const response = await get(url, checkSsl, checkRedirect);
    const { statusCode, headers, buffer } = response;
    return {statusCode, headers, json: Convert.bufferToJson(buffer)}
}

export const getJsonData = async (url: string, checkSsl: boolean = true, checkRedirect: boolean = true):Promise<HttpJsonDataResponse> => {
    const response = await getJson(url, checkSsl, checkRedirect);
    return response.json;
}

