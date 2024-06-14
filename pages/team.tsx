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
    {name: "Manan Seth", post: "Secretary", img: `/img/team/2021/manan.jpg`},
]
var mans2022:PersonProps[] = [
    {name: "Advait Mehla", post: "Manager", img: "/img/team/2022/advait.jpg"},

          {name: "Raksha Maheshwari", post: "Secretary", img: "/img/team/2022/raksha.jpg"},
]
var mans2023:PersonProps[] = [
    {name: "Ashwin Goyal", post: "Secretary", img: `/img/team/2023/Ashwin.jpg`},
    {name: "Arhaan Ahmed", post: "Manager", img: `/img/team/2023/Arhaan.jpg`}
]
var mans2024:PersonProps[] = [
    {name: "Yashvi Bhuva", post: "Manager", img: `/img/team/2024/Yashvi_Bhuva.jpg`},
    {name: "Tanishk Mohan", post: "Manager", img: `/img/team/2024/Tanishk_Mohan.jpg`}
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
          {name: "Harshda", post: "Convener", img: `/img/team/2020/harshda.png`},
          {name: "Manan", post: "Convener", img: `/img/team/2021/manan.jpg`},
          {name: "Omkar", post: "Convener", img: `/img/team/default_profile.png`},
          {name: "Soham", post: "Convener", img: `/img/team/2020/soham.jpeg`},
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
          {name: "Pal", post: "Enthusiast", img: `/img/team/2022/Pal.png`},
          {name: "Ashwin", post: "Enthusiast", img: `/img/team/2022/Ashwin.png`},
          {name: "Garv", post: "Enthusiast", img: `/img/team/2022/garv.png`},
          {name: "Harshavardhan", post: "Enthusiast", img: `/img/team/2022/harshvardhan.png`},
          {name: "Navdha", post: "Enthusiast", img: `/img/team/2022/Navdha.png`},
          {name: "Ravi", post: "Enthusiast", img: `/img/team/2022/Ravi.jpg`},
          {name: "Shravya", post: "Enthusiast", img: `/img/team/2022/Shravya.png`},
          {name: "Arhaan", post: "Enthusiast", img: `/img/team/2022/Arhaan.jpg`},
]

/*var enthus2022:PersonProps[] = [

]*/

var convs2023:PersonProps[] = [
    {name: "Adarsh", post: "Enthusiast", img: `/img/team/2023/Adarsh.jpg`},
    {name: "Shreyas", post: "Convener", img: `/img/team/2023/Shreyas.jpg`},
    {name: "Dileep", post: "Convener", img: `/img/team/2023/Dileep.jpeg`},
    {name: "Suryansh Srijan", post: "Convener", img: `/img/team/2023/Suryansh_Srijan.jpg`},
    {name: "Mehul", post: "Convener", img: `/img/team/2023/Mehul.jpeg`},
    {name: "Tanishk", post: "Convener", img: `/img/team/2023/Tanishk.jpeg`},
    {name: "Aryan", post: "Convener", img: `/img/team/2023/Aryan.jpeg`},
    {name: "Sreekar", post: "Convener", img: `/img/team/2023/Sreekar.jpeg`},
    {name: "Aditya", post: "Enthusiast", img: `/img/team/2023/Aditya.jpeg`},
    {name: "Yashvi", post: "Convener", img: `/img/team/2023/Yashvi.jpg`},
    {name: "Manan", post: "Enthusiast", img: `/img/team/2023/Manan.jpeg`},
    {name: "Ronak", post: "Enthusiast", img: `/img/team/2023/Ronak.jpeg`},
    {name: "Anilesh", post: "Enthusiast", img: `/img/team/2023/Anilesh.jpeg`},
    {name: "Suryansh Patidar", post: "Enthusiast", img: `/img/team/2023/Suryansh_Patidar.jpeg`},
    {name: "Tanishka", post: "Enthusiast", img: `/img/team/2023/Tanishka.png`},
    {name: "Tanish", post: "Enthusiast", img: `/img/team/2023/Tanish.png`},
    {name: "Mayank", post: "Enthusiast", img: `/img/team/2023/Mayank.jpeg`},
    {name: "Tarshit", post: "Enthusiast", img: `/img/team/2023/Tarshit.jpeg`}
]
var convs2024:PersonProps[] = [
    {name: "Jigyasa", post: "Convener", img: `/img/team/2024/Jigyasa.jpg`},
    {name: "Kundan", post: "Enthusiast", img: `/img/team/2024/Kundan.jpg`},
    {name: "Shruti", post: "Enthusiast", img: `/img/team/2024/Shruti.jpg`},
    {name: "Vishwaajith", post: "Enthusiast", img: `/img/team/2024/Vishwaajith.jpg`},
    {name: "Ganesh", post: "Enthusiast", img: `/img/team/2024/Ganesh.jpg`},
    {name: "Arash", post: "Convener", img: `/img/team/2024/Arash.jpg`},
    {name: "Sanidhya", post: "Convener", img: `/img/team/2024/Sanidhya.jpg`},
    {name: "Arnav Jayswal", post: "Enthusiast", img: `/img/team/2024/Arnav_Jayswal.jpg`},
    {name: "Arnav Bhate", post: "Enthusiast", img: `/img/team/2024/Arnav_Bhate.jpg`},
    {name: "Vedant", post: "Enthusiast", img: `/img/team/2024/Vedant.jpg`},
    {name: "Yash", post: "Convener", img: `/img/team/2024/Yash.jpg`},
    {name: "Mrunal", post: "Convener", img: `/img/team/2024/Mrunal.jpg`},
    {name: "Yashasvee", post: "Convener", img: `/img/team/2024/Yashasvee.jpg`},
    {name: "Dishika", post: "Convener", img: `/img/team/2024/Dishika.jpg`},
    {name: "Raghav", post: "Enthusiast", img: `/img/team/2024/Raghav.jpg`},
    {name: "Anvit", post: "Convener", img: `/img/team/2024/Anvit.jpg`}
]

export default function Team(){
    return(<div className="mt-4">

        <Tab.Container
            defaultActiveKey="2024"
            id="myTab"
        >
            <Nav variant="pills" className="justify-content-center pillsColor">
                <TeamYearLabel year="2019"></TeamYearLabel>
                <TeamYearLabel year="2020"></TeamYearLabel>
                <TeamYearLabel year="2021"></TeamYearLabel>
                <TeamYearLabel year="2022"></TeamYearLabel>
                <TeamYearLabel year="2023"></TeamYearLabel>
                <TeamYearLabel year="2024"></TeamYearLabel>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="2024" title="2024 (Present)" className="abc">
                    <TeamContent year="2024" mans={mans2024} convs={convs2024}></TeamContent>
                </Tab.Pane>
                <Tab.Pane eventKey="2023" title="2023" className="abc">
                    <TeamContent year="2023" mans={mans2023} convs={convs2023}></TeamContent>
                </Tab.Pane>
                <Tab.Pane eventKey="2022" title="2022">
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
