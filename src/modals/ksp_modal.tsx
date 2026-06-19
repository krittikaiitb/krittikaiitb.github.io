import React from "react";
import Link from 'next/link';

// code for picture card
interface CardProps{
    name: string;
    link: string;
    img?: string;
}

function Card({name, link, img="/img/team/default_profile.png"}: CardProps){
    return(
      <div className="mb-4 mx-auto" style={{width:"90%"}}>
        <Link href={link} target="_blank" className="text-decoration-none text-reset">
            <div className="card border-0 shadow bg-light">
                {/* <img src={img} className="card-img-top" alt="..."/> */}
                <div className="card-body text-center">
                    <h6 className="card-title mb-0">{name}</h6>
                </div>
            </div>
        </Link>
      </div>
    )
}

export interface NumProps{
    name:string;
    img?: string;
    members: {name:string; pdf:string; img?:string}[];
}

interface NumModal {
num: NumProps;
onClose: () => void;
}

export default function ModalBox({ num, onClose }: NumModal) {
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
                            {/* <h4 className="font-semibold" style={{textAlign:"center"}}>{num.name}</h4> */}
                        <br></br>

                        <div>
                            {num.members.map((p,i) => (<Card key={i} name={`${p.name}'s report`} link={p.pdf} img={p.img}></Card>))}
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
);
}
