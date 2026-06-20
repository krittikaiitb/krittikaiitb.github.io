import Link from 'next/link';
import React,{useState} from "react";
import ModalBox, {NumProps} from '../../../../src/modals/ksp_modal';

interface OneProps{
    name: string,
    link: string,
    img?: string,
}

var resources:OneProps[] = [
    {name: "Generating Gravitational Waveforms using Numerical Relativity and Post Newtonian Terms", img: `/img/ksp/gwaves.png`, link: `/KSPReports/2022/Gravitational_Waves_KSP_Report.pdf`},
    {name: "Galactic Evolution Through N-Body Simulations", img: `/img/ksp/gal_evolution.png`, link: `/KSPReports/2022/Galactic Evolution.pdf`},
    {name: "Solar Flares", img: `/img/ksp/solarflare.png`, link: `/KSPReports/2022/KSP_Stellar_Flares_2022.pdf`},
    {name: "Decoding Stellar Physics Hidden in GAIA Data", img: `/img/ksp/gaia.png`, link: `/KSPReports/2022/Gaia_Report_Final.pdf`}
]

function OneCard({name, link, img="/img/team/default_profile.png"}: OneProps){
    return(
      <div className="w-100 mb-4">
        <Link href={link} target="_blank" className="text-decoration-none text-reset">
            <div className="card border-0 shadow bg-light h-100 flex-row mx-auto" style={{width:"90%"}}>
                <img src={img} className="card-img-top" alt="..." style={{width:"18%",objectFit:"cover"}}/>
                <div className="card-body d-flex justify-content-center align-items-center">
                    <h5 className="card-title mb-0">{name}</h5>
                </div>
            </div>
        </Link>
      </div>
    )
}

var nums:NumProps[] = [
    {name: "Estimating Age of A Cluster",
    img:`/img/ksp/cluster.png`,
    members:[
        {name:"Anish" ,pdf:"/KSPReports/2022/Anish_IITB_Krittika_SP3_0_2022_Final_Report.pdf", img: `/img/Astrophotography/milkyway.png`},
        {name:"Dhatri" ,pdf:"/KSPReports/2022/Dhatri Dongre KSP Report.pdf", img: `/img/Astrophotography/milkyway.png`},
        {name:"Pal" ,pdf:"/KSPReports/2022/Pal Aggarwal KSP Report.pdf", img: `/img/Astrophotography/milkyway.png`}    ]}
]

interface NumCardProps extends NumProps{
    onClick:()=>void;
}

function NumCard({name, img="/img/team/default_profile.png", onClick, }: NumCardProps){
    return(
        <div className="w-100 mb-4">
            <div onClick={onClick} className="card border-0 shadow bg-light h-100 flex-row mx-auto" style={{cursor:"pointer",width:"90%"}}>
                <img src={img} className="card-img-top" alt="..." style={{width:"18%",objectFit:"cover"}}></img>
                <div className="card-body d-flex text-center justify-content-center align-items-center">
                    <h5 className="card-title mb-0">{name}</h5>
                </div>
            </div>
        </div>
    )
}

export default function Three() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selected, setSelected] = useState<NumProps | null>(null);
    
    const handleOpenModal = (num: NumProps) => {setSelected(num); setIsModalVisible(true);};
    const handleCloseModal = () => {setSelected(null); setIsModalVisible(false);};

    return(
        <>
        {isModalVisible && selected && (<ModalBox num={selected} onClose={handleCloseModal}/>)}

        <div>
            <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 1rem", paddingLeft:"20px", paddingRight:"20px"}}>
                <h1 style={{textAlign:"center"}}><b>KSP 3.0</b></h1>
                <p>As we were moving back to an offline campus, KSP continued with full vigour. Here&apos;s a look at the reports of the projects done:</p>
            </div>

            <div className="mt-4">
                <div className="card shadow-lg container mt-4 mb-4 aboutCard">
                    <p className="display-4 pt-2 pb-2 text-center"></p>
                    <div className="container">
                        <div className="row justify-content-center">
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
