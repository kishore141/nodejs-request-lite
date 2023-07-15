import {Json} from "../types";

const toJson = (jsonString: string): Json => {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        return null;
    }
}


export = {toJson};