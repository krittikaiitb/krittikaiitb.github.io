import Link from 'next/link';
import React,{useState} from "react";
import ModalBox, {TalkProps} from '../../../src/modal';

var talks:TalkProps[] = [
    {name: "HoloNet Talk 01", talkname:"Introduction to Time Domain Astronomy", img: `/img/resources/holonet/time_astro.png`, link: `/holonet_talks/Time_Domain_Astronomy.pdf`, details:"This talk explores transients driven by compact objects - neutron stars and black holes, how their variability reveals physics under extreme conditions and realtime observing campaigns.", about:"Anirudh Salgundi is an Astrophysics researcher at the ATA Lab, University of North Carolina at Chapel Hill.  He was previously a research assistant at the STAR Lab, IIT Bombay. His current research focuses on fast transients, such as GRB's and electromagnetic counterparts of gravitational wave events.", date:"20 May, 2026"},
    {name: "HoloNet Talk 02", talkname:"The Galactic Centre", img: `/img/resources/holonet/galactic.png`, link: `/holonet_talks/Galactic_Centre.pdf`, details:"This talk discusses the black hole at our galaxy's center, which remains mysterious despite its proximity. We dive into findings on dust composition, elemental abundances, and constraints on nearby black holes, unveiling how supermassive black holes grow and shape their galactic environments.", about:"Tamojeet Roychowdhury is a first-year PhD student in Astronomy at the University of California, Berkeley with a B.Tech degree in Electrical Engineering from IIT Bombay. His research spans UV-optical-infrared observational astronomy, with current work on active galactic nuclei and high-redshift galaxies.", date:"2 June, 2026"}
]

interface TalkCardProps extends TalkProps{
    onClick:()=>void;
}

function TalkCard({name, talkname, img="/img/team/default_profile.png", onClick, }: TalkCardProps){
    return(
        <div className="col-md-4 mb-4">
            <div onClick={onClick} className="card border-0 shadow bg-light cursor-pointer h-100">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h6 className="card-title mb-0">{name}</h6>
                    <p className="card-text">{talkname}</p>
                </div>
            </div>
        </div>
    )
}

export default function Holonet() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTalk, setSelectedTalk] = useState<TalkProps | null>(null);
    
    const handleOpenModal = (talk: TalkProps) => {setSelectedTalk(talk); setIsModalVisible(true);};
    const handleCloseModal = () => {setSelectedTalk(null); setIsModalVisible(false);};

    return(
        <>
        {isModalVisible && selectedTalk && (<ModalBox talk={selectedTalk} onClose={handleCloseModal}/>)}

        <div>
            <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 1rem", paddingLeft:"20px", paddingRight:"20px"}}>
                <h1 style={{textAlign:"center"}}><b>HoloNet Talk Series</b></h1>
            </div>

            <div className="mt-4">
                <div className="card shadow-lg container mt-4 mb-4 aboutCard">
                    <p className="display-4 pt-2 pb-2 text-center"></p>
                    <div className="container">
                        <div className="row row-cols-md-3 row-cols-2 justify-content-center">
                            {talks.map((talk, key) => <TalkCard key={key} {...talk} onClick={() => handleOpenModal(talk)}></TalkCard>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
