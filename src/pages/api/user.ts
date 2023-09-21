import { NextApiRequest, NextApiResponse } from "next";

export default function user(req:NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET') {
        res.status(200).json({ name: 'LAKSHYA KHANDELWAL' })
    }
}