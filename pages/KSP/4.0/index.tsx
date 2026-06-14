import Link from 'next/link';
import React,{useState} from "react";
import ModalBox, {NumProps} from '../../modals/ksp_modal';

interface OneProps{
    name: string,
    link: string,
    img?: string,
}

var resources:OneProps[] = [
    {name: "The Dance of Death: Magnetic Cataclysmic Variables", img: `/img/Astrophotography/moon_venus_jupiter.jpg`, link: `/KSPReports/2023/UVIT_Report.pdf`},
    {name: "Canoeing through the Stars on Gaia", img: `/img/Astrophotography/moon_venus_jupiter.jpg`, link: `/KSPReports/2023/Gaia/Gaia_Report_2023 (1).pdf`}
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
    {name: "Faintest of the Brightest- GRB Hunters",
    img:`/img/Astrophotography/moon_venus_jupiter.jpg`,
    members:[
        {name:"Ananya" ,pdf:"/KSPReports/2023/GRB/GRB_Ananya.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Ravi" ,pdf:"/KSPReports/2023/GRB/GRB_Ravi.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Shreyas" ,pdf:"/KSPReports/2023/GRB/GRB_Shreyas.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Rahul" ,pdf:"/KSPReports/2023/GRB/GRB Project Report Rahul.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Yash" ,pdf:"/KSPReports/2023/GRB//KSP_Endterm_Project_Report_Yash.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Sarvesh" ,pdf:"/KSPReports/2023/GRB/ksp_sarvesh-1.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Soham" ,pdf:"/KSPReports/2023/GRB/SohamMitraReportGRBHunters.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`}
    ]},
    {name: "Solar System Dynamics",
    img:`/img/Astrophotography/moon_venus_jupiter.jpg`,
    members:[
        {name:"Suryansh Srijan" ,pdf:"/KSPReports/2023/solar_system/KSP_Report_Suryansh_Srijan.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Suryansh Patidar" ,pdf:"/KSPReports/2023/solar_system/KSP 4.0 final report.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Atharv" ,pdf:"/KSPReports/2023/solar_system/Krittika_Final_Report.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Aditya" ,pdf:"/KSPReports/2023/solar_system/kspfinal.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Ramesh" ,pdf:"/KSPReports/2023/solar_system/The_Legrand_Orange_Book_Template__English_ (8).pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`}        
    ]},
    {name: "Exploring the Radio Sky",
    img:`/img/Astrophotography/moon_venus_jupiter.jpg`,
    members:[
        {name:"Aadyot" ,pdf:"/KSPReports/2023/Radio/KSP Radio Report Aadyot Bhardwaj.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Atreyi" ,pdf:"/KSPReports/2023/Radio/KSP_Radio_Astro_Report (2).pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Karthik" ,pdf:"/KSPReports/2023/Radio//KSP_Radio_Report___Karthik.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Ambica" ,pdf:"/KSPReports/2023/Radio/ksp.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Mehul" ,pdf:"/KSPReports/2023/Radio/Radio_KSP_Report.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`},
        {name:"Darsh" ,pdf:"/KSPReports/2023/Radio/Report.pdf", img: `/img/Astrophotography/moon_venus_jupiter.jpg`}
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

export default function Four() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selected, setSelected] = useState<NumProps | null>(null);
    
    const handleOpenModal = (num: NumProps) => {setSelected(num); setIsModalVisible(true);};
    const handleCloseModal = () => {setSelected(null); setIsModalVisible(false);};

    return(
        <>
        {isModalVisible && selected && (<ModalBox num={selected} onClose={handleCloseModal}/>)}

        <div>
            <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 1rem", paddingLeft:"20px", paddingRight:"20px"}}>
                <h1 style={{textAlign:"center"}}><b>KSP 4.0</b></h1>
                <p>For the summer of 2023, the projects were carried on with effort, energy and enthusiasm. The details can be found in <a href="https://docs.google.com/document/d/1Fs0B3G7J1XKK3JopYHSCRpLGSvSuSYn5uWoG1kMv8vQ/edit?tab=t.0" target="_blank">this google doc.</a> Take a look at the project reports:</p>
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
