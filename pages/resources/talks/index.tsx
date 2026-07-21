import Link from 'next/link';
import React,{useState} from "react";
import ModalBox, {TalkProps} from '../../../src/modals/talks_modal';

var talks:TalkProps[] = [
    {name: "Neutrinos and The IceCube Project", talkname:"The First Decade of High-Energy Neutrino Astronomy and Neutrino Physics", img: `/img/resources/talks/icecube.png`, link: `/talks/IceCube_Project.pdf`, details:"The IceCube project at the South Pole melted 86 holes 2.5 km deep to build an enormous neutrino observatory. It discovered deep-space neutrinos with energies over a million times greater than those from particle accelerators. Born from the universe's most violent processes, these particles originate from enigmatic cosmic accelerators. This talk explores the IceCube telescope and discusses the discovery that high-energy neutrinos and cosmic rays originate from sources powered by supermassive black holes in active galaxies.", about:"Fondly refered in the scientific community as 'The Neutrino Man', Professor Francis Halzen is the Hilldale and Gregory Breit Distinguished Professor of Physics at the University of Wisconsin–Madison. For more than four decades, he has worked at the intersection of particle physics and astrophysics. \n \n As the Principal Investigator of the IceCube Neutrino Observatory, Professor Halzen led the effort to transform a cubic kilometer of pristine Antarctic ice into the world's largest neutrino detector. Thanks to IceCube, scientists made the first observations of high-energy cosmic neutrinos, opening an entirely new window on the Universe and ushering in the era of neutrino astronomy. Professor Halzen continues to lead the development of IceCube-Gen2, the next generation of the observatory. \n \n Alongside his research, Professor Halzen has authored over 700 scientific publications  and co-authored the renowned textbook Quarks and Leptons: An Introductory Course in Modern Particle Physics with Alan Martin - a book that has introduced generations of students to the foundations of particle physics. \n \n His pioneering contributions have earned him numerous honors, including the American Physical Society Medal for Exceptional Achievement in Research (2026) Bruno Pontecorvo Prize (2018), among many others." ,date:"15 July, 2026"}
]

interface TalkCardProps extends TalkProps{
    onClick:()=>void;
}

function TalkCard({name, talkname, img="/img/team/default_profile.png", onClick, }: TalkCardProps){
    return(
        <div className="col-md-4 mb-4">
            <div onClick={onClick} className="card border-0 shadow bg-light h-100" style={{cursor:"pointer"}}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h6 className="card-title mb-0">{name}</h6>
                    <p className="card-text" style={{ whiteSpace: "pre-line" }}>{talkname}</p>
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
                <h1 style={{textAlign:"center"}}><b>Talks</b></h1>
            </div>

            <div className="mt-4">
                <div className="card shadow-lg container mt-4 mb-4 aboutCard">
                    <p className="display-4 pt-2 pb-2 text-center"></p>
                    <div className="container">
                        <div className="row row-cols-md-3 row-cols-2">
                            {talks.map((talk, key) => <TalkCard key={key} {...talk} onClick={() => handleOpenModal(talk)}></TalkCard>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
