// original stellar team file which does not have links to insta, linkedin

import PersonCard from "../person_cards/personCard"
import { PersonProps } from "../person_cards/personCard"

export default function ConvenerList({arrayOfPeople}: {arrayOfPeople:PersonProps[]}){
    return(
        <div className="container">
            <h1 className="h1 font-weight-light pt-4 pb-4 text-center">Stellar Team</h1>
            <div className="row row-cols-md-3 row-cols-2 justify-content-center">
            {arrayOfPeople.map((person, key) => <PersonCard name={person.name} post={person.post} img={person.img} key={key}></PersonCard>)}
            </div>
        </div>
    )
}
