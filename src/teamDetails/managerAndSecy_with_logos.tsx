// new managers and secy file which has links to insta, linkedin

import { LogoPersonProps} from "../person_cards/personCard_with_logos"
import LogoPersonCard from "../person_cards/personCard_with_logos"

export default function LogoManagerList({arrayOfPeople}: {arrayOfPeople:LogoPersonProps[]}){

  return(
    <div className="container">
      <div className="row row-cols-sm-2 row-cols-1 justify-content-center">
        {arrayOfPeople.map((person, key) => <LogoPersonCard name={person.name} post={person.post} img={person.img} key={key}></LogoPersonCard>)}
      </div>
    </div>
  )
}