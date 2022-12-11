import { PersonProps } from "../src/personCard"
import ConvenerList from "../src/teamDetails/conveners"
import ManagerList from "../src/teamDetails/managerAndSecy"

function TeamYearLabel({year, ariaSelected=false}: {year:string, ariaSelected?:boolean}){
    let a = (ariaSelected)?" active": "";
    return(
        <li className="nav-item">
        <a
            className={"nav-link text-secondary" + a}
            id={'team-' + year + "-tab"}
            data-toggle="tab"
            href={"#team-" + year}
            role="tab"
            aria-controls={`team-`+year}
            aria-selected={ariaSelected}
        >
        Team {year}
      </a>
    </li>
    )
}

function TeamContent({year, mans, convs, active=false}: {year:string, mans:PersonProps[], convs:PersonProps[], active?:boolean}){
    let a = (active)?" show active":"";
    return(
        <div className={"tab-pane fade p-3" + a} id={"team-" + year} role="tabpanel" aria-labelledby={"team-" + year + "-tab"}>
        <div className="card shadow-lg container mt-4 mb-5 aboutCard">
          <p className="display-4 pt-4 pb-4 text-center">Team {year}</p>
          <ManagerList arrayOfPeople={mans}></ManagerList>
          <ConvenerList arrayOfPeople={convs}></ConvenerList>
        </div>
        </div>
    )
}

var mans2019:PersonProps[] = [
    {name: "Vedant Shenoy", post: "Manager", img: "img/team/2019/Vedant_Shenoy.jpg"},

    {name: "Kunal Deshmukh", post: "Secretary", img: "img/team/2019/Kunal_Deshmukh.jpg"}
]
var mans2020:PersonProps[] = [
    {name: "Kritti", post: "Manager", img: "img/team/2019/Kritti.jpg"},
          {name: "Siddhant Tripathy", post: "Secretary", img: "img/team/2019/Siddhant_Tripathy.jpg"},
]
var mans2021:PersonProps[] = [
    {name: "Manan Seth", post: "Secretary", img: "/img/team/default_profile.png"},
]
var mans2022:PersonProps[] = [
    {name: "Advait Mehla", post: "Manager", img: "img/team/2022/advait.jpg"},

          {name: "Raksha Maheshwari", post: "Secretary", img: "img/team/2022/raksha.jpg"},
]
var convs2019:PersonProps[] = [
    {name: "Arsh", post: "Convener", img: "img/team/2019/Arsh_Khan.jpg"},
          {name: "Fathima", post: "Convener", img: "img/team/2019/Fathima.jpg"},
          {name: "Kritti", post: "Convener", img: "img/team/2019/Kritti.jpg"},
          {name: "Pranav", post: "Convener", img: "img/team/2019/Pranav_Page.jpg"},
          {name: "Shravan", post: "Convener", img: "img/team/2019/Shravan_Godse.jpg"},
          {name: "Siddhant", post: "Convener", img: "img/team/2019/Siddhant_Tripathy.jpg"},
]
var convs2020:PersonProps[] = [
    {name: "Ananya", post: "Convener", img: "/img/team/default_profile.png"},
          {name: "Aneesh", post: "Convener", img: "/img/team/default_profile.png"},
          {name: "Devansh", post: "Convener", img: "/img/team/default_profile.png"},
          {name: "Harshada", post: "Convener", img: "img/team/2020/harshda.png"},
          {name: "Manan", post: "Convener", img: "/img/team/default_profile.png"},
          {name: "Omkar", post: "Convener", img: "/img/team/default_profile.png"},
          {name: "Soham", post: "Convener", img: "/img/team/default_profile.png"},
          {name: "Sreeman", post: "Convener", img: "/img/team/default_profile.png"},
          {name: "Unnatee", post: "Convener", img: "/img/team/default_profile.png"},
          {name: "Vaishnav", post: "Convener", img: "/img/team/default_profile.png"},
]
var convs2021:PersonProps[] = [
    {name: "Adish", post: "Convener", img: "img/team/2021/adish.jpeg"},
          {name: "Utkarsha", post: "Convener", img: "/img/team/default_profile.png"},
          {name: "Advait", post: "Convener", img: "img/team/2022/advait.jpg"},
          {name: "Aditya Kudre", post: "Convener", img: "/img/team/default_profile.png"},

          {name: "Aditya Maheshwari", post: "Convener", img: "img/team/2021/adityamaheshwari.jpeg"},
          {name: "Raksha", post: "Convener", img: "img/team/2022/raksha.jpg"},
          {name: "Mohit", post: "Convener", img: "/img/team/default_profile.png"},

          {name: "Kishan", post: "Convener", img: "/img/team/default_profile.png"},

          {name: "Shreya", post: "Convener", img: "/img/team/default_profile.png"},
]
var convs2022:PersonProps[] = [
    {name: "Tamojeet", post: "Convener", img: "img/team/2022/Tamojeet.jpeg"},
          {name: "Shlesh", post: "Convener", img: "img/team/2022/Shlesh.jpg"},
          {name: "Dhananjay", post: "Convener", img: "img/team/2022/Dhananjay.jpeg"},
          {name: "Apoorva", post: "Convener", img: "img/team/2022/Apoorva.jpeg"},
          {name: "Anushika", post: "Convener", img: "img/team/2022/Anushika.jpeg"},
          {name: "Mayank", post: "Convener", img: "img/team/2022/Mayank.jpeg"},
]



export default function Team(){
    return(
    <div className="mt-4">
  <ul
    className="nav nav-pills justify-content-center pillsColor"
    id="myTab"
    role="tablist"
  >
    <TeamYearLabel year="2019"></TeamYearLabel>
    <TeamYearLabel year="2020"></TeamYearLabel>
    <TeamYearLabel year="2021"></TeamYearLabel>
    <TeamYearLabel year="2022" ariaSelected={true}></TeamYearLabel>
  </ul>
  <div className="tab-content" id="myTabContent">
    <TeamContent year="2019" mans={mans2019} convs={convs2019}></TeamContent> 
    <TeamContent year="2020" mans={mans2020} convs={convs2020}></TeamContent> 
    <TeamContent year="2021" mans={mans2021} convs={convs2021}></TeamContent> 
    <TeamContent year="2022" mans={mans2022} convs={convs2022} active={true}></TeamContent> 
  </div>
</div>
    )

}
