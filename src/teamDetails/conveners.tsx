import PersonCard from "../personCard"
import { PersonProps } from "../personCard"

export default function ConvenerList({arrayOfPeople}: {arrayOfPeople:PersonProps[]}){
    return(
        <div className="container">
            <h1 className="h1 font-weight-light pt-4 pb-4 text-center">Conveners</h1>
            <div className="row row-cols-md-3 row-cols-2 justify-content-center">
            {arrayOfPeople.map((person, key) => <PersonCard name={person.name} post={person.post} img={person.img} key={key}></PersonCard>)}
            </div>
        </div>
    )
}
