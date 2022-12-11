
import { PersonProps} from "../personCard"
import PersonCard from "../personCard"

var people:PersonProps[] = [
  {name: "Kritti", post: "Manager", img:"img/team/2019/Kritti.jpg"},
  {name: "Siddhant Tripathy", post:"Secretary", img:"img/team/2019/Siddhant_Tripathy.jpg"}
]

export default function ManagerList({arrayOfPeople}: {arrayOfPeople:PersonProps[]}){

  return(
    <div className="container">
      <div className="row row-cols-sm-2 row-cols-1 justify-content-center">
        {arrayOfPeople.map((person, key) => <PersonCard name={person.name} post={person.post} img={person.img} key={key}></PersonCard>)}
      </div>
    </div>
  )
}