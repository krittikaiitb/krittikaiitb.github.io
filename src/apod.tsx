import React, { useState, useEffect } from 'react';
import Image from 'next/image';
function Apod(){
    const [apod, setApod] = useState();
    useEffect(() => {
        const url = (process.env.NEXT_PUBLIC_IS_STATIC)? "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY" : "/krittika-website/api/apodAPI";
        fetch(url)
           .then((response) => {console.log(response); return response.json()})
           .then((data) => {
              console.log(data);
              setApod(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
    
     if (apod == undefined){
        return(<></>);
     }

    return (<div className="text-center col-md-12 mt-3">
  <h3 className="mb-4">Astronomy Picture Of The Day, By NASA</h3>
  <div className="row">
    <div className="col-lg-7">
      {apod['media_type'] == 'video'? <iframe src={apod["url"]} width="100%" height="100%" frameBorder={0} /> :  <img
        src={apod['url']}
        alt="Picture of the day"
        className="img-fluid shadow-lg w-100 rounded-lg"

        // placeholder="blur"
      />}
      
      
    </div>
    <div className="col-lg-5">
      <div className="d-none d-md-block apod_text_block rounded-lg p-3 shadow-lg bg-light">
        <div className="container-fluid h1 cinzel">
          {apod['title']}
        </div>
        <div className="font-weight-light text-left">
          {apod['explanation']}
        </div>
        <div className="small text-right">
          <b className="badge">
            Credits:
            <a
              className="text-secondary"
              href="https://apod.nasa.gov/apod/"
              target="_blank"
              rel="noreferrer"
            >
              APOD
            </a>
          </b>
        </div>
      </div>
      <div className="d-md-none d-block card shadow-lg p-3 aboutCard">
        <div className="container-fluid h3 font-weight-light cinzel">
            {apod['title']}
        </div>
        <div className="lead small text-left">
            {apod['explanation']}
        </div>
        <div className="small text-right">
          <b className="badge">
            Credits:
            <a
              className="text-secondary"
              href="https://apod.nasa.gov/apod/"
              target="_blank"
            rel="noreferrer"
            >
              APOD
            </a>
          </b>
        </div>
      </div>
    </div>
  </div>
</div>)
}

export default Apod;