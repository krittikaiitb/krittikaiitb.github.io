import { PersonProps } from "../src/personCard"
import ConvenerList from "../src/teamDetails/conveners"
import ManagerList from "../src/teamDetails/managerAndSecy"
import Tab from 'react-bootstrap/Tab'; // See https://react-bootstrap.github.io/components/tabs/ for working of tabs
import Nav from 'react-bootstrap/Nav';


function TeamYearLabel({year}: {year:string}){
    return(
        <Nav.Link eventKey={year} className="nav-link text-secondary">Team {year}</Nav.Link>
    )
}

function TeamContent({year, mans, convs, active=true}: {year:string, mans:PersonProps[], convs:PersonProps[], active?:boolean}){
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
    {name: "Vedant Shenoy", post: "Manager", img: `/img/team/2019/Vedant_Shenoy.jpg`},

    {name: "Kunal Deshmukh", post: "Secretary", img: `/img/team/2019/Kunal_Deshmukh.jpg`}
]
var mans2020:PersonProps[] = [
    {name: "Kritti", post: "Manager", img: `/img/team/2019/Kritti.jpg`},
          {name: "Siddhant Tripathy", post: "Secretary", img: `/img/team/2019/Siddhant_Tripathy.jpg`},
]
var mans2021:PersonProps[] = [
    {name: "Manan Seth", post: "Secretary", img: `/img/team/default_profile.png`},
]
var mans2022:PersonProps[] = [
    {name: "Advait Mehla", post: "Manager", img: "/img/team/2022/advait.jpg"},

          {name: "Raksha Maheshwari", post: "Secretary", img: "/img/team/2022/raksha.jpg"},
]
var convs2019:PersonProps[] = [
    {name: "Arsh", post: "Convener", img: "/img/team/2019/Arsh_Khan.jpg"},
          {name: "Fathima", post: "Convener", img: "/img/team/2019/Fathima.jpg"},
          {name: "Kritti", post: "Convener", img: "/img/team/2019/Kritti.jpg"},
          {name: "Pranav", post: "Convener", img: "/img/team/2019/Pranav_Page.jpg"},
          {name: "Shravan", post: "Convener", img: "/img/team/2019/Shravan_Godse.jpg"},
          {name: "Siddhant", post: "Convener", img: "/img/team/2019/Siddhant_Tripathy.jpg"},
]
var convs2020:PersonProps[] = [
    {name: "Ananya", post: "Convener", img: `/img/team/default_profile.png`},
          {name: "Aneesh", post: "Convener", img: `/img/team/default_profile.png`},
          {name: "Devansh", post: "Convener", img: `/img/team/default_profile.png`},
          {name: "Harshada", post: "Convener", img: `/img/team/2020/harshda.png`},
          {name: "Manan", post: "Convener", img: `/img/team/default_profile.png`},
          {name: "Omkar", post: "Convener", img: `/img/team/default_profile.png`},
          {name: "Soham", post: "Convener", img: `/img/team/default_profile.png`},
          {name: "Sreeman", post: "Convener", img: `/img/team/default_profile.png`},
          {name: "Unnatee", post: "Convener", img: `/img/team/default_profile.png`},
          {name: "Vaishnav", post: "Convener", img: `/img/team/default_profile.png`},
]
var convs2021:PersonProps[] = [
    {name: "Adish", post: "Convener", img: `/img/team/2021/adish.jpeg`},
          {name: "Utkarsha", post: "Convener", img: `/img/team/default_profile.png`},
          {name: "Advait", post: "Convener", img: `/img/team/2022/advait.jpg`},
          {name: "Aditya Kudre", post: "Convener", img: `/img/team/default_profile.png`},

          {name: "Aditya Maheshwari", post: "Convener", img: `/img/team/2021/adityamaheshwari.jpeg`},
          {name: "Raksha", post: "Convener", img: `/img/team/2022/raksha.jpg`},
          {name: "Mohit", post: "Convener", img: `/img/team/default_profile.png`},

          {name: "Kishan", post: "Convener", img: `/img/team/default_profile.png`},

          {name: "Shreya", post: "Convener", img: `/img/team/default_profile.png`},
]
var convs2022:PersonProps[] = [
    {name: "Tamojeet", post: "Convener", img: `/img/team/2022/Tamojeet.jpeg`},
          {name: "Shlesh", post: "Convener", img: `/img/team/2022/Shlesh.jpg`},
          {name: "Dhananjay", post: "Convener", img: `/img/team/2022/Dhananjay.jpeg`},
          {name: "Apoorva", post: "Convener", img: `/img/team/2022/Apoorva.jpeg`},
          {name: "Anushika", post: "Convener", img: `/img/team/2022/Anushika.jpeg`},
          {name: "Mayank", post: "Convener", img: `/img/team/2022/Mayank.jpeg`},
]



export default function Team(){
    return(<div className="mt-4">

        <Tab.Container
            defaultActiveKey="2022"
            id="myTab"
        >
            <Nav variant="pills" className="justify-content-center pillsColor">
                <TeamYearLabel year="2019"></TeamYearLabel>
                <TeamYearLabel year="2020"></TeamYearLabel>
                <TeamYearLabel year="2021"></TeamYearLabel>
                <TeamYearLabel year="2022"></TeamYearLabel>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="2022" title="2022 (Present)" className="abc">
                    <TeamContent year="2022" mans={mans2022} convs={convs2022}></TeamContent>
                </Tab.Pane>
                <Tab.Pane eventKey="2021" title="2021">
                    <TeamContent year="2021" mans={mans2021} convs={convs2021}></TeamContent>
                </Tab.Pane>
                <Tab.Pane eventKey="2020" title="2020">
                    <TeamContent year="2020" mans={mans2020} convs={convs2020}></TeamContent>
                </Tab.Pane>
                <Tab.Pane eventKey="2019" title="2019">
                    <TeamContent year="2019" mans={mans2019} convs={convs2019}></TeamContent>
                </Tab.Pane>

            </Tab.Content>

        </Tab.Container>
  </div>
    )

}
