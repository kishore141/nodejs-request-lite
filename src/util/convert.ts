import {Json} from "../types";

const stringToJson = (jsonString: string): Json => {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        return null;
    }
}

const bufferToJson = (buffer: Buffer): Json => {
    if(buffer){
        return stringToJson(buffer.toString());
    }else {
        return null;
    }

}

const jsonToString = (json: Json): string => {
    try {
        if(json && typeof json === "object"){
            return JSON.stringify(json);
        }else {
            return "";
        }
    } catch (e) {
        return "";
    }
}

export = {
    stringToJson,
    bufferToJson,
    jsonToString

};