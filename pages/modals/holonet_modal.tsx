import React from "react";
import Link from 'next/link';

export interface TalkProps {
name: string;
talkname: string;
details: string;
about: string;
link: string;
date: string;
img?: string;
}

interface ResourceCardProps{
    name: string;
    link: string;
    img?: string;
}

interface ModalProps {
talk: TalkProps;
onClose: () => void;
}

function ResourceCard({name, link, img="/img/team/default_profile.png"}: ResourceCardProps){
    return(
      <div className="col-md-4 mb-4">
        <Link href={link} target="_blank" className="text-decoration-none text-reset">
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

export default function ModalBox({ talk, onClose }: ModalProps) {
return (
    <div className="modal-overlay" onClick={onClose} style={{position: "fixed",inset: 0, zIndex: 9999}}>
        <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
            <div className="flex bg-white shadow bg-light" style={{zIndex:1, position:"fixed", top:"50%", left:"50%", transform:"translate(-50%,-50%)",width:"90vw",maxWidth:"800px", maxHeight:"85vh", overflow: "auto"}}>
                <div className="overflow-hidden" style={{ padding:"2px 16px"}}>
                    <nav className="px-1 py-3">
                        <button onClick={onClose} className="px-3 py-1 rounded" style={{float:"right"}}>✕</button>
                    </nav>

                    <div>
                        <br></br>
                            <h2 className="font-semibold" style={{textAlign:"center"}}>{talk.name}</h2>
                            <h4 className="font-semibold" style={{textAlign:"center"}}>{talk.talkname}</h4>
                            <p className="mt-2 font-bold" style={{float:"right", height:"10px"}}>Date of the Talk : {talk.date}</p>
                        <br></br>

                        <p style={{padding:"17px"}}>{talk.details}</p>

                        <div style={{display:"flex",alignItems:"flex-start",gap:"1rem"}}>
                            <ResourceCard name="slides" link={talk.link} img={talk.img}></ResourceCard>
                            <div>
                                <h6>About the speaker:</h6>
                                <p>{talk.about}</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
);
}