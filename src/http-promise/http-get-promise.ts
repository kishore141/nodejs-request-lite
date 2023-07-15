import https from 'https';
// import {IncomingHttpHeaders} from "http2";
import {HttpResponse} from "../types";

const httpGetPromise = (url: string, checkSsl: boolean = true): Promise<HttpResponse> => {
  return new Promise((resolve, reject) => {
    const options = {
      agent: new https.Agent({
        rejectUnauthorized: checkSsl,
      }),
    };
    https
      .get(url, options, (res) => {
        const { statusCode, headers } = res;
        let data: any[] = [];
        res
          .on('data', (chunk) => {
            data.push(chunk);
          })
          .on('end', async () => {
            let buffer = Buffer.concat(data);
            resolve({ buffer, statusCode, headers });
          });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

export = httpGetPromise;