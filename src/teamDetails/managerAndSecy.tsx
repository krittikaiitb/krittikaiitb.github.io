
import { PersonProps} from "../personCard"
import PersonCard from "../personCard"

export default function ManagerList({arrayOfPeople}: {arrayOfPeople:PersonProps[]}){

  return(
    <div className="container">
      <div className="row row-cols-sm-2 row-cols-1 justify-content-center">
        {arrayOfPeople.map((person, key) => <PersonCard name={person.name} post={person.post} img={person.img} key={key}></PersonCard>)}
      </div>
    </div>
  )
}