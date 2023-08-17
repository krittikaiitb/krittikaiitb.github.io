import Link from 'next/link';
export default function theoretical() {
    return(
        <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 6rem", paddingLeft:"20px",paddingRight:"20px"}}>
            <h1><b>Theoretical Astronomy</b></h1>
            <p>We proudly conducted the course <b>Foundations of Astronomy & Astrophysics</b> as part of the Technical Summer School of Learners&apos; 
                Space. The course was structured into various modules, encompassing a wide range of topics from cosmology to supernovae, 
                space telescopes to solar physics, and the hunt for exoplanets to the captivating world of multimessenger astronomy.
            </p>
            <p>Below are the modules that were covered in the course:
            </p>
            <h3>Basic Modules</h3>
            <ul>
                <li><h4><Link href="/Learners'_Space/Basic_modules/Celestial Mechanics and Gravity.pdf">Celestial Mechanics and Gravity</Link></h4></li>
                <li><h4><Link href="/Learners'_Space/Basic_modules/Coordinate System & Time.pdf">Coordinate Systems and Time</Link></h4></li>
                <li><h4><Link href="/Learners'_Space/Basic_modules/Radiation & its use in Astrophysics.pdf">Radiation & its use in Astrophysics</Link></h4></li>
                <li><h4><Link href="/Learners'_Space/Basic_modules/Telescopes.pdf">Telescopes</Link></h4></li>
            </ul>
            <h3>Advanced Modules</h3>
            <ul>
                <li><h4><Link href="/Learners'_Space/Advanced_modules/cosmology.pdf">Cosmology</Link></h4></li>
                <li><h4><Link href="/Learners'_Space/Advanced_modules/Distance Ladder.pdf">Distance Ladder</Link></h4></li>
                <li><h4><Link href="/Learners'_Space/Advanced_modules/Exoplanet detection.pdf">Exoplanet Detection</Link></h4></li>
                <li><h4><Link href="/Learners'_Space/Advanced_modules/Mult-messenger astronomy.pdf">Multi-messenger Astronomy</Link></h4></li>
                <li><h4><Link href="/Learners'_Space/Advanced_modules/Radio-astronomy.pdf">Radio Astronomy</Link></h4></li>
                <li><h4><Link href="/Learners'_Space/Advanced_modules/solar physics.pdf">Solar Physics</Link></h4></li>
                <li><h4><Link href="/Learners'_Space/Advanced_modules/Stellar Structure and Evolution.pdf">Stellar Structure and Evolution</Link></h4></li>
            </ul>
        </div>
    )
}