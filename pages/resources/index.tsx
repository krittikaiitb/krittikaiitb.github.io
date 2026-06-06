import Link from 'next/link';
import PhotoAlbum from "react-photo-album";

interface ResourceProps{
    name: string,
    link: string,
    img?: string,
}

var resources:ResourceProps[] = [
    {name: "HoloNet Talk Series", img: `/holonet_talks/holonet.png`, link: `/resources/holonet`},
    {name: "Astro101 Series", img: `/img/Astrophotography/leotriplet.png`, link: `/resources`},
    {name: "AP Series", img: `/img/Astrophotography/omega_centauri.png`, link: `/resources`}
]

function ResourceCard({name, link, img="/img/team/default_profile.png"}: ResourceProps){
    return(
      <div className="col-md-4 mb-4">
        <Link href={link} className="text-decoration-none text-reset">
            <div className="card border-0 shadow bg-light">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h6 className="card-title mb-0">{name}</h6>
                </div>
            </div>
        </Link>
      </div>
    )
}

export default function Resources() {
    return(
        <div>
            <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 1rem", paddingLeft:"20px",paddingRight:"20px"}}>
                <h1 style={{textAlign:"center"}}><b>Resources</b></h1>
            </div>

            <div className="mt-4">
                <div className="card shadow-lg container mt-4 mb-4 aboutCard">
                    <p className="display-4 pt-2 pb-2 text-center"></p>
                    <div className="container">
                        <div className="row row-cols-md-3 row-cols-2 justify-content-center">
                            {resources.map((resource, key) => <ResourceCard name={resource.name} link={resource.link} img={resource.img} key={key}></ResourceCard>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
