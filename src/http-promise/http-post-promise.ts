import https from 'https';
import {HttpResponse} from "../types";

function httpPostPromise(url: string, dataString: string): Promise<HttpResponse> {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': dataString.length,
        },
        timeout: 1000, // in ms
    }

    return new Promise((resolve, reject) => {
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

        req.write(dataString)
        req.end()
    })
}

export = httpPostPromise;