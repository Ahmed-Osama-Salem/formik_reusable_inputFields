import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req:NextApiRequest,res:NextApiResponse){

if(req.method !='POST'){
    res.status(405).json({mes: "not post"})
}

   const {firstName,
   lastName,
   email,
   picked} = req.body;

   console.log(firstName,
    lastName,
    email,
    picked);
   
   res.status(200).json({mes:"done"})
}