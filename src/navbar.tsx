import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BsNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import krittikaGif from '../public/img/logo_gif.gif';
const NavLink = ({href, children}: {href:string, children:string}) => (
  <Nav.Link
    className="btn btn-link text-light my-2 my-sm-0 mx-1"
    href={href}
  >
    <b className="lead">{children}</b>
  </Nav.Link>

)

const DarkModeSwitch = () => (
/* <li className=""> */
  <div className="custom-control custom-switch p-0 nav-item my-2 mx-3" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
    <input
      type="checkbox"
      className="custom-control-input d-none"
      id="darkSwitch"
    />
    <label
      className="custom-control-label darkToggle"
      htmlFor="darkSwitch"
    >
      <div className="dark-mode-img" />
    </label>
  </div>
// </li>

)

const Navbar = ()=> (
  <>

    <BsNavbar expand='md' bg="dark" variant="dark" className="navbar fixed-top navbar-inverse navbar-expand-lg navbar-dark bg-dark topNavBar cinzel">
      <Container>
  <BsNavbar.Brand href="/">
    <Image
      src={krittikaGif}
      alt="logo"
      className="rounded-lg"
      height={50}
      width={75}
      sizes="75px"
    />
  </BsNavbar.Brand>
  <BsNavbar.Brand className="navbar-brand mx-md-4 font-weight-light" href="/">
    <h3 style={{ marginBottom: 0 }}>Krittika</h3>
  </BsNavbar.Brand>
  <BsNavbar.Toggle aria-controls="responsive-navbar-nav" />  
  <BsNavbar.Collapse id="responsive-navbar-nav">
  <Nav className="ml-auto">
   
      <NavLink href="/events">Events</NavLink>
      <NavLink href="/team">Team</NavLink>
      <DarkModeSwitch/>
  </Nav>
  </BsNavbar.Collapse>
  </Container>
</BsNavbar>
</>

)

export default Navbar;