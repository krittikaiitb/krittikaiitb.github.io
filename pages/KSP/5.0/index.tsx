import Link from 'next/link';
import React,{useState} from "react";
import ModalBox, {NumProps} from '../../modals/ksp_modal';

interface OneProps{
    name: string,
    link: string,
    img?: string,
}

var resources:OneProps[] = [
    {name: "Eclipsing Binaries", img: `/img/Astrophotography/omega_centauri.png`, link: `/KSPReports/2024/Eclipsing Binaries/KSP_5_0_EB_Project_Report.pdf`},
    {name: "Hunt for the QCD axion dark matter using gravitational microlensing", img: `/img/Astrophotography/omega_centauri.png`, link: `/KSPReports/2024/Hunt for the QCD axion dark matter using gravitational microlensing/KSP_Project_Report_DarkMatterAxionsPBH.pdf`},
    {name: "Modifications of stellar structure equations due to Rotation and Tidal stretching", img: `/img/Astrophotography/omega_centauri.png`, link: `/KSPReports/2024/Modifications of stellar structure equations due to Rotation and Tidal stretching/KSPReport.pdf`},
    {name: "Prospects of LSST, ILMT and AXIS for searching SMBHB candidates", img: `/img/Astrophotography/omega_centauri.png`, link: `/KSPReports/2024/Prospects of LSST, ILMT and AXIS for searching SMBHB candidates/KSP_final.pdf`}
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
    {name: "Binary black holes from scratch",
    img:`/img/Astrophotography/omega_centauri.png`,
    members:[
        {name:"Arash" ,pdf:"/KSPReports/2024/Binary black holes from scratch/KSP_binary_black_holes.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Arya" ,pdf:"/KSPReports/2024/Binary black holes from scratch/KSP_Project_Report.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Chaitanya" ,pdf:"/KSPReports/2024/Binary black holes from scratch/KSP_Report_Chaitanya_Divyesh_Patel.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Gokularamanan" ,pdf:"/KSPReports/2024/Binary black holes from scratch/Final_KSP_Project_Report_BBHs_Gokul.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Sriram" ,pdf:"/KSPReports/2024/Binary black holes from scratch/BH_Binary_Mergers_Report_SriramR.pdf", img: `/img/Astrophotography/omega_centauri.png`}
    ]},
    {name: "Pinpricks on the vortex - unveiling nearby galaxy evolution with star clusters",
    img:`/img/Astrophotography/omega_centauri.png`,
    members:[
        {name:"Manohara" ,pdf:"/KSPReports/2024/Pinpricks on the vortex -  unveiling nearby galaxy evolution with star clusters/Star Cluster Analysis - Report.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Nishad" ,pdf:"/KSPReports/2024/Pinpricks on the vortex -  unveiling nearby galaxy evolution with star clusters/ksp_project_report (4).pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Sanidhya" ,pdf:"/KSPReports/2024/Pinpricks on the vortex -  unveiling nearby galaxy evolution with star clusters/KSP_REPORT.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Soham" ,pdf:"/KSPReports/2024/Pinpricks on the vortex -  unveiling nearby galaxy evolution with star clusters/Final Report KSP.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Surya" ,pdf:"/KSPReports/2024/Pinpricks on the vortex -  unveiling nearby galaxy evolution with star clusters/SuryaVinodEndtermReport.pdf", img: `/img/Astrophotography/omega_centauri.png`}
    ]},
    {name: "Radio Astronomy",
    img:`/img/Astrophotography/omega_centauri.png`,
    members:[
        {name:"Manit" ,pdf:"/KSPReports/2024/Radio Astronomy/KSP_Endterm_Report.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Niral" ,pdf:"/KSPReports/2024/Radio Astronomy/Final_report.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Nirav" ,pdf:"/KSPReports/2024/Radio Astronomy/report.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Saatwik" ,pdf:"/KSPReports/2024/Radio Astronomy/Saatwik_KSP_Final.pdf", img: `/img/Astrophotography/omega_centauri.png`}
    ]},
    {name: "Study of the Nearest Hydrogen-Rich Core-Collapse Supernova: SN 2023ixf",
    img:`/img/Astrophotography/omega_centauri.png`,
    members:[
        {name:"Aditi" ,pdf:"/KSPReports/2024/Study of the Nearest Hydrogen-Rich Core-Collapse Supernova SN 2023ixf/ksp_endterm.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Divyansh" ,pdf:"/KSPReports/2024/Study of the Nearest Hydrogen-Rich Core-Collapse Supernova SN 2023ixf/KSP_Project_Report_Divyansh_Tripathi.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Gaurav" ,pdf:"/KSPReports/2024/Study of the Nearest Hydrogen-Rich Core-Collapse Supernova SN 2023ixf/Krittika.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Jigyasa" ,pdf:"/KSPReports/2024/Study of the Nearest Hydrogen-Rich Core-Collapse Supernova SN 2023ixf/KSP_study_of_sn2023ixf_Report.pdf", img: `/img/Astrophotography/omega_centauri.png`},
        {name:"Mayank" ,pdf:"/KSPReports/2024/Study of the Nearest Hydrogen-Rich Core-Collapse Supernova SN 2023ixf/Report_Mayank_Soni.pdf", img: `/img/Astrophotography/omega_centauri.png`}
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

export default function Five() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selected, setSelected] = useState<NumProps | null>(null);
    
    const handleOpenModal = (num: NumProps) => {setSelected(num); setIsModalVisible(true);};
    const handleCloseModal = () => {setSelected(null); setIsModalVisible(false);};

    return(
        <>
        {isModalVisible && selected && (<ModalBox num={selected} onClose={handleCloseModal}/>)}

        <div>
            <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 1rem", paddingLeft:"20px", paddingRight:"20px"}}>
                <h1 style={{textAlign:"center"}}><b>KSP 5.0</b></h1>
                <p>Now in its fifth year, KSP had the largest variety of projects offered yet. You can take a look at all the project reports:</p>
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
