import Link from 'next/link';
import React,{useState} from "react";
import ModalBox, {NumProps} from '../modal';

interface OneProps{
    name: string,
    link: string,
    img?: string,
}

var resources:OneProps[] = [
    {name: "Imaging a Bright Neutron Star", img: `/img/Astrophotography/leotriplet.png`, link: `/KSPReports/2025/Imaging A Bright Neutron Star/End_term_report_Radio_imaging_final.pdf`},
    {name: "Thermonuclear Bursts In Neutron Star XRay Binaries", img: `/img/Astrophotography/leotriplet.png`, link: `/KSPReports/2025/Thermonuclear Bursts In Neutron Star X-Ray Binaries/Thermonuclear Bursts In Neutron Star Xray Binaries.pdf`}
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

var nums:NumProps[] = [
    {name: "Visualizing Geodesics In Schwarzchild SpaceTime",
    img:`/img/Astrophotography/leotriplet.png`,
    members:[
        {name:"Aryan" ,pdf:"/KSPReports/2025/Visualizing Geodesics Through Schwarzchild SpaceTime/Aryan.pdf", img: `/img/Astrophotography/leotriplet.png`},
        {name:"Gayatri" ,pdf:"/KSPReports/2025/Visualizing Geodesics Through Schwarzchild SpaceTime/Gayatri.pdf", img: `/img/Astrophotography/leotriplet.png`},
        {name:"Rudra" ,pdf:"/KSPReports/2025/Visualizing Geodesics Through Schwarzchild SpaceTime/Rudra.pdf", img: `/img/Astrophotography/leotriplet.png`},
        {name:"Vedant" ,pdf:"/KSPReports/2025/Visualizing Geodesics Through Schwarzchild SpaceTime/Vedant.pdf", img: `/img/Astrophotography/leotriplet.png`}
    ]},
    {name: "Gamma Ray Bursts - Theory And Analysis",
    img:`/img/Astrophotography/leotriplet.png`,
    members:[
        {name:"Aditya" ,pdf:"/KSPReports/2025/Gamma Ray Bursts - Theory And Analysis/Aditya.pdf", img: `/img/Astrophotography/leotriplet.png`},
        {name:"Jahnavi" ,pdf:"/KSPReports/2025/Gamma Ray Bursts - Theory And Analysis/Jahnavi.pdf", img: `/img/Astrophotography/leotriplet.png`},
        {name:"Pratham" ,pdf:"/KSPReports/2025/Gamma Ray Bursts - Theory And Analysis/Pratham.pdf", img: `/img/Astrophotography/leotriplet.png`},
        {name:"Pratyush" ,pdf:"/KSPReports/2025/Gamma Ray Bursts - Theory And Analysis/Pratyush.pdf", img: `/img/Astrophotography/leotriplet.png`}
    ]},
    {name: "Design And Analysis Of Radomes",
    img:`/img/Astrophotography/leotriplet.png`,
    members:[
        {name:"Aleena" ,pdf:"/KSPReports/2025/Design And Analysis Of Radomes/Aleena.pdf", img: `/img/Astrophotography/leotriplet.png`},
        {name:"Anvit" ,pdf:"/KSPReports/2025/Design And Analysis Of Radomes/Anvit.pdf", img: `/img/Astrophotography/leotriplet.png`},
        {name:"Manohara" ,pdf:"/KSPReports/2025/Design And Analysis Of Radomes/Manohara.pdf", img: `/img/Astrophotography/leotriplet.png`},
        {name:"Sandipan" ,pdf:"/KSPReports/2025/Design And Analysis Of Radomes/Sandipan.pdf", img: `/img/Astrophotography/leotriplet.png`}
    ]}
]

interface NumCardProps extends NumProps{
    onClick:()=>void;
}

function NumCard({name, img="/img/team/default_profile.png", onClick, }: NumCardProps){
    return(
        <div className="col-md-4 mb-4">
            <div onClick={onClick} className="card border-0 shadow bg-light h-100" style={{cursor:"pointer"}}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h6 className="card-title mb-0">{name}</h6>
                </div>
            </div>
        </div>
    )
}

export default function Six() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selected, setSelected] = useState<NumProps | null>(null);
    
    const handleOpenModal = (num: NumProps) => {setSelected(num); setIsModalVisible(true);};
    const handleCloseModal = () => {setSelected(null); setIsModalVisible(false);};

    return(
        <>
        {isModalVisible && selected && (<ModalBox num={selected} onClose={handleCloseModal}/>)}

        <div>
            <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 1rem", paddingLeft:"20px", paddingRight:"20px"}}>
                <h1 style={{textAlign:"center"}}><b>KSP 6.0</b></h1>
                <p>Now in its sixth year, KSP has had one of the most interesting projects offered. You can take a look at all the project reports:</p>
            </div>

            <div className="mt-4">
                <div className="card shadow-lg container mt-4 mb-4 aboutCard">
                    <p className="display-4 pt-2 pb-2 text-center"></p>
                    <div className="container">
                        <div className="row row-cols-md-3 row-cols-2 justify-content-center">
                            {nums.map((num, key) => <NumCard key={key} {...num} onClick={() => handleOpenModal(num)}></NumCard>)}
                            {resources.map((one, key) => <OneCard name={one.name} link={one.link} img={one.img} key={key}></OneCard>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
