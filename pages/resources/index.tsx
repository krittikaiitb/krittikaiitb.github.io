import Link from 'next/link';
import PhotoAlbum from "react-photo-album";

interface ImageProps{
    name: string,
    link: string,
    img?: string,
}

var images:ImageProps[] = [
    {name: "Holonet Talk Series", img: `/img/Astrophotography/carina_nebula.png`, link: `/resources/holonet`},
    {name: "Astro101 Series", img: `/img/Astrophotography/leotriplet.png`, link: `/resources/holonet`},
    {name: "AP Series", img: `/img/Astrophotography/omega_centauri.png`, link: `/resources/holonet`}
]

function ImageCard({name, link, img="/img/team/default_profile.png"}: ImageProps){
    return(
      <div className="col-md-4 mb-4">
        <Link href={link} className="text-decoration-none">
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

export default function astroph() {
    return(
        <div>
            <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 1rem", paddingLeft:"20px",paddingRight:"20px"}}>
                <h1><b>Resources</b></h1>
            </div>

            <div className="mt-4">
                <div className="card shadow-lg container mt-4 mb-4 aboutCard">
                    <p className="display-4 pt-2 pb-2 text-center"></p>
                    <div className="container">
                        <div className="row row-cols-md-3 row-cols-2 justify-content-center">
                            {images.map((image, key) => <ImageCard name={image.name} link={image.link} img={image.img} key={key}></ImageCard>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
