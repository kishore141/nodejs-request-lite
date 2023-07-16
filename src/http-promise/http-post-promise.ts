import https from 'https';
import {HttpResponse, JsonString} from "../types";

function httpPostPromise(url: string, jsonString: JsonString, checkSsl: boolean = true): Promise<HttpResponse> {

    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 1000, // in ms
            agent: new https.Agent({
                rejectUnauthorized: checkSsl,
            })
        };


        const req = https.request(url, options, (res) => {
            const { statusCode, headers } = res;
            const data: any[] = []
            res.on('data', (chunk) => data.push(chunk))
            res.on('end', () => {
                // const resString = Buffer.concat(body).toString()
                let buffer = Buffer.concat(data);
                resolve({ buffer, statusCode, headers });
            })
        })

        req.on('error', (err) => {
            reject(err)
        })

        req.on('timeout', () => {
            req.destroy()
            reject(new Error('Request time out'))
        })

        if(jsonString){
            req.write(jsonString)
        }

        req.end()
    })
}

export = httpPostPromise;