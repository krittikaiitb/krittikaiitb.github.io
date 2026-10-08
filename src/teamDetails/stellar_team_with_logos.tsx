// new stellar team file which has links to insta, linkedin

import LogoPersonCard from "../person_cards/personCard_with_logos"
import { LogoPersonProps } from "../person_cards/personCard_with_logos"

export default function LogoConvenorList({arrayOfPeople}: {arrayOfPeople:LogoPersonProps[]}){
    return(
        <div className="container">
            <h1 className="h1 font-weight-light pt-4 pb-4 text-center">Stellar Team</h1>
            <div className="row row-cols-md-3 row-cols-2 justify-content-center">
            {arrayOfPeople.map((person, key) => <LogoPersonCard name={person.name} post={person.post} insta={person.insta} linkd={person.linkd} img={person.img} key={key}></LogoPersonCard>)}
            </div>
        </div>
    )
}