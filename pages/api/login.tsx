// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

type Data = {
    message: string;
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
    selfHandleResponse: true,
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: 'method not support' });
    }
    return new Promise((resolve) => {
        // Dont send cookie to API server
        req.headers.cookie = '';

        const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
            let body = '';
            proxyRes.on('data', function (chunk) {
                body += chunk;
            });
            proxyRes.on('end', function () {
                try {
                    const { accessToken, expireAt } = JSON.parse(body);
                    // convert token to cookie
                    const cookie = new Cookies(req, res, {
                        secure: process.env.NODE_ENV !== 'development',
                    });

                    cookie.set('access_token', accessToken, {
                        httpOnly: true,
                        sameSite: 'lax',
                        expires: new Date(expireAt),
                    });
                    //

                    (res as NextApiResponse).status(200).json({ message: 'Signin sucessfully' });
                    resolve(true);
                } catch (error) {
                    (res as NextApiResponse).status(500).json({ message: 'Khong co quyen' });
                }
            });
        };
        proxy.once('proxyRes', handleLoginResponse);

        proxy.web(req, res, option);
        // res.status(200).json({ name: 'Path Match all here' });
    });
}
