import Link from 'next/link';
export default function KSP(){
    return(
        <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 6rem", paddingLeft:"20px",paddingRight:"20px"}}>
            <h1><b>Krittika Summer Projects</b></h1>
            <p>We run a range of exciting astrophysics projects through KSP every summer. This is one of the largest student led such programs in the country</p>

            <br></br>
            <h2>KSP 4.0</h2>
            <p>For the summer of 2023, we have some stimulating projects lined up. The details will be released soon through our instagram page. Stay tuned.</p>
            <h2>KSP 3.0</h2>
            <p>As we were moving back to an offline campus, KSP continued with full vigour. Here's a look at the reports of the projects done:</p>
            <ul>

            <li><h4><Link href='/KSPReports/2022/Gravitational_Waves_KSP_Report.pdf'>Generating Gravitational Waveforms using Numerical Relativity and Post Newtonian Terms</Link></h4></li>
            <li><h4> <Link href='/KSPReports/2022/KSP_Stellar_Flares_2022.pdf'>Solar Flares</Link></h4> </li>
            <li><h4> <Link href='/KSPReports/2022/Galactic Evolution.pdf'>Galactic Evolution Through N-Body Simulations</Link></h4> </li>
            <li><h4> <Link href='/KSPReports/2022/Gaia_Report_Final.pdf'>Decoding Stellar Physics Hidden in GAIA Data</Link></h4> </li>
            <li><h4> Estimating Age of A Cluster</h4></li>
            
            <p>This project had 3 reports:  </p> 
               
                <ul>
                    <li><Link href='/KSPReports/2022/Anish_IITB_Krittika_SP3_0_2022_Final_Report.pdf'>Anish's Report</Link></li>    
                     
                    <li><Link href='/KSPReports/2022/Dhatri Dongre KSP Report.pdf'>Dhatri's Report</Link></li>    
                    <li><Link href='public/KSPReports/2022/Pal Aggarwal KSP Report.pdf'>Pal's Report</Link></li>   
                </ul> 
               
                </ul>
        </div>
    )
}