// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';

type Data = {
    name: string;
};

const proxy = httpProxy.createProxyServer();

export const config = {
    api: {
        bodyParse: false,
    },
};
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // Dont send cookie to API server
    req.headers.cookie = '';

    proxy.web(req, res, {
        target: 'http://js-post-api.herokuapp.com',
        changeOrigin: true,
        selfHandleResponse: false,
    });
    // res.status(200).json({ name: 'Path Match all here' });
}
