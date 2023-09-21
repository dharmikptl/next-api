import { NextApiRequest, NextApiResponse } from "next";

export default function product (req:NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET') {
        res.status(200).json({ productName: 'I Phone' })
    }
}