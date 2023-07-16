import {IncomingHttpHeaders} from "http2";

export type Json = object | null;

export type JsonString = string | null;

export type HttpResponse = {
    statusCode: number | undefined;
    headers: IncomingHttpHeaders;
    buffer: Buffer;
};

export type HttpBufferResponse = {
    statusCode: number | undefined;
    headers: IncomingHttpHeaders;
    buffer: Buffer;
}

export type HttpJsonResponse = {
    statusCode: number | undefined;
    headers: IncomingHttpHeaders;
    json: Json;
}

export type HttpJsonDataResponse = Json;

