import Link from 'next/link';
import React,{useState} from "react";

interface OneProps{
    name: string,
    link: string,
    img?: string,
}

var resources:OneProps[] = [
    {name: "Kirkwood Gaps", img: `/img/Astrophotography/sombrero.png`, link: `/KSPReports/2021/KSP_Report___Kirkwood_Gaps.pdf`},
    {name: "Photometry and Supernovae", img: `/img/Astrophotography/sombrero.png`, link: `/KSPReports/2021/Photometry and Supernovae.pdf`}
]

function OneCard({name, link, img="/img/team/default_profile.png"}: OneProps){
    return(
      <div className="col-md-4 mb-4">
        <Link href={link} target="_blank" className="text-decoration-none text-reset">
            <div className="card border-0 shadow bg-light h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h6 className="card-title mb-0">{name}</h6>
                </div>
            </div>
        </Link>
      </div>
    )
}

export default function Two() {
    
    return(
        <div>
            <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 1rem", paddingLeft:"20px", paddingRight:"20px"}}>
                <h1 style={{textAlign:"center"}}><b>KSP 2.0</b></h1>
                <p>KSP 2.0 marked the second year in KSP&apos;s journey. This time we had 2 collaborative projects. You can take a look at their detailed reports.</p>
            </div>

            <div className="mt-4">
                <div className="card shadow-lg container mt-4 mb-4 aboutCard">
                    <p className="display-4 pt-2 pb-2 text-center"></p>
                    <div className="container">
                        <div className="row row-cols-md-3 row-cols-2 justify-content-center">
                            {resources.map((one, key) => <OneCard name={one.name} link={one.link} img={one.img} key={key}></OneCard>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
