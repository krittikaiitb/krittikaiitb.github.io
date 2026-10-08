// original file for managers and secys that does NOT have redirection to insta/ linkedin

import { PersonProps} from "../person_cards/personCard"
import PersonCard from "../person_cards/personCard"

export default function ManagerList({arrayOfPeople}: {arrayOfPeople:PersonProps[]}){

  return(
    <div className="container">
      <div className="row row-cols-sm-2 row-cols-1 justify-content-center">
        {arrayOfPeople.map((person, key) => <PersonCard name={person.name} post={person.post} img={person.img} key={key}></PersonCard>)}
      </div>
    </div>
  )
}