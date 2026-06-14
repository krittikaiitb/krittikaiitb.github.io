import Link from 'next/link';
import PhotoAlbum from "react-photo-album";

interface ResourceProps{
    name: string,
    link: string,
    img?: string,
}

var resources:ResourceProps[] = [
    {name: "KSP 6.0", img: `/img/Astrophotography/carina_nebula.png`, link:`/KSP/6.0`},
    {name: "KSP 5.0", img: `/img/Astrophotography/leotriplet.png`, link:`/KSP/5.0`},
    {name: "KSP 4.0", img: `/img/Astrophotography/omega_centauri.png`, link:`/KSP/4.0`},
    {name: "KSP 3.0", img: `/img/Astrophotography/moon_venus_jupiter.jpg`, link:`/KSP/3.0`},
    {name: "KSP 2.0", img: `/img/Astrophotography/cosmic_cliffs.png`, link:`/KSP/2.0`},
    {name: "KSP 1.0", img: `/img/Astrophotography/milkyway.png`, link:`/KSP/1.0`}
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
                <h1 style={{textAlign:"center"}}><b>Krittika Summer Projects</b></h1>
                <p>We run a range of exciting astrophysics projects through KSP every summer. This is one of the largest student led such programs in the country</p>
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
