import Link from 'next/link';
import PhotoAlbum from "react-photo-album";

interface ImageProps{
    name: string,
    img?: string,
}

var images:ImageProps[] = [
    {name: "Carina Nebula", img: `/img/Astrophotography/carina_nebula.png`},
    {name: "Leo Triplet", img: `/img/Astrophotography/leotriplet.png`},
    {name: "Omega Centauri", img: `/img/Astrophotography/omega_centauri.png`},
    {name: "Conjugation of Moon, Venus and Jupiter", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
    {name: "Cosmic Cliffs", img: `/img/Astrophotography/cosmic_cliffs.png`},
    {name: "Milky Way", img: `/img/Astrophotography/milkyway.png`},
    {name: "M3 Globular Cluster", img: `/img/Astrophotography/m3.jpg`},
    {name: "Sombrero Galaxy", img: `/img/Astrophotography/sombrero.png`},
    {name: "ISS Solar transit", img: `/img/Astrophotography/ISS_solar_transit.png`},
    {name: "Andromeda Galaxy", img: `/img/Astrophotography/Andromeda.jpg`},
    {name: "M51 Whirlpool Galaxy", img: `/img/Astrophotography/m51.jpg`},
    {name: "M5 Globular Cluster", img: `/img/Astrophotography/m5.png`},
    {name: "Owl Nebula", img: `/img/Astrophotography/owl_nebula.png`},
    {name: "Orion Nebula", img: `/img/Astrophotography/orion_nebula.jpg`},
    {name: "Jupiter", img: `/img/Astrophotography/Jupiter.jpg`},
    {name: "Moon craters", img: `/img/Astrophotography/moon_crater.png`}
]

function ImageCard({name, img="/img/team/default_profile.png"}: ImageProps){
    return(
      <div className="col-md-4 mb-4">
        <div className="card border-0 shadow bg-light">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h6 className="card-title mb-0">{name}</h6>
          </div>
        </div>
      </div>
    )
}

export default function astroph() {
    return(
        <div>
            <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 1rem", paddingLeft:"20px",paddingRight:"20px"}}>
                <h1><b>Astrophotography</b></h1>
                <p>Here at Krittika, two of our favourite hobbies are stargazing and astrophotography. We frequently conduct stargazing sessions 
                    at the Gymkhana ground. And when the skies are bright, we try to capture their beauty in our DSLRs. But, to be able to process 
                    that data into beautiful pictures is a difficult task.
                </p>
                <p>Ravi, a club member from the 2022-23 team, has written an excellent blog explaining 
                    <Link href="https://ravioli1369.github.io/blog/2023/astro-image-processing/"> Astro Image Processing</Link> in great detail. 
                </p>
                <p>As part of Learners&apos; Space, we conducted a course on <b>Astronomical Imaging</b>. The course consisted of
                    various modules covering the basics of astrophotography, the equipment required, and the post-processing techniques.
                </p>
                <p>Below are the modules that were covered in the course:
                </p>
                <ul>
                    <li><h4><Link href="/Learners'_Space/Astrophotography/Introduction to Imaging Systems.pdf">Introduction to Imaging Systems</Link></h4></li>
                    <li><h4><Link href="/Learners'_Space/Astrophotography/Understanding Space Telescopes.pdf">Understanding Space Telescopes</Link></h4></li>
                    <li><h4><Link href="/Learners'_Space/Astrophotography/Image Sensors.pdf">Image Sensors</Link></h4></li>
                    <li><h4><Link href="/Learners'_Space/Astrophotography/Stacking and Filters.pdf">Stacking and Filters</Link></h4></li>
                </ul>
                <p>Also, look at some of our splendid clicks of stars, planets, clusters, and nebulae.
                </p>
            </div>
            <div className="mt-4">
                <div className="card shadow-lg container mt-4 mb-4 aboutCard">
                    <p className="display-4 pt-2 pb-2 text-center"></p>
                    <div className="container">
                        <div className="row row-cols-md-3 row-cols-2 justify-content-center">
                            {images.map((image, key) => <ImageCard name={image.name} img={image.img} key={key}></ImageCard>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
