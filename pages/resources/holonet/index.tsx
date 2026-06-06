import Link from 'next/link';
import PhotoAlbum from "react-photo-album";

interface TalkProps{
    name: string,
    speaker: string,
    link: string,
    img?: string,
}

var talks:TalkProps[] = [
    {name: "HoloNet Talk 01", img: `/img/Astrophotography/leotriplet.png`, link: `/holonet_talks/Time_Domain_Astronomy.pdf`, speaker:"Introduction to Time Domain Astronomy"},
    {name: "HoloNet Talk 02", img: `/img/Astrophotography/carina_nebula.png`, link: `/holonet_talks/Galactic_Centre.pdf`, speaker:"The Galactic Centre"}
]

function TalkCard({name, link, speaker, img="/img/team/default_profile.png"}: TalkProps){
    return(
      <div className="col-md-4 mb-4">
        <Link href={link} className="text-decoration-none text-reset">
            <div className="card border-0 shadow bg-light">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h6 className="card-title mb-0">{name}</h6>
                    <p className="card-text">{speaker}</p>
                </div>
            </div>
        </Link>
      </div>
    )
}

export default function holonet() {
    return(
        <div>
            <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 1rem", paddingLeft:"20px", paddingRight:"20px"}}>
                <h1 style={{textAlign:"center"}}><b>HoloNet Talk Series</b></h1>
            </div>

            <div className="mt-4">
                <div className="card shadow-lg container mt-4 mb-4 aboutCard">
                    <p className="display-4 pt-2 pb-2 text-center"></p>
                    <div className="container">
                        <div className="row row-cols-md-3 row-cols-2 justify-content-center">
                            {talks.map((talk, key) => <TalkCard name={talk.name} link={talk.link} speaker={talk.speaker} img={talk.img} key={key}></TalkCard>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
