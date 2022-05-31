// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';
type Data = {
    name: string;
};

const proxy = httpProxy.createProxyServer();

export const config = {
    api: {
        bodyParse: false,
    },
};
export const option = {
    target: 'http://js-post-api.herokuapp.com',
    changeOrigin: true,
    selfHandleResponse: false,
};
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    return new Promise((resolve) => {
        // convert cookies to authorization
        const cookies = new Cookies(req, res);
        const accessToken = cookies.get('access_token');

        if (accessToken) {
            req.headers.Authorization = `Bearer ${accessToken}`;
        }

        // Dont send cookie to API server
        req.headers.cookie = '';

        proxy.once('proxyRes', () => {
            resolve(true);
        });

        proxy.web(req, res, option);

        // res.status(200).json({ name: 'Path Match all here' });
    });
}
