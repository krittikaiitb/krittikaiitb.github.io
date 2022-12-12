
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    date: string,
    explanation: string,
    media_type: string,
    title: string,
    url: string
  }
  
export default async function serverSideCall(req: NextApiRequest,    res: NextApiResponse<ResponseData>) {

    const resultingJson: ResponseData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_APOD_KEY}`).then((result)=>result.json()).
    then((response)=>{const a:ResponseData =  {
        date: response['date'],
        explanation: response['explanation'],
        media_type: response['media_type'],
        title: response['title'],
        url: response['url']
    }; return a;})
    res.status(200).json(resultingJson);
}
