import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false
library.add(faGithub, faFacebook, faInstagram, faEnvelope, faCopyright)
const Footer = () => (
    <div id="commonFooter">
    
    <footer className="d-flex flex-wrap align-items-center py-3 my-4 mt-auto text-center mb-3 card rounded-lg shadow-lg mainFooter copyrightFooter cinzel">
      <h3 className="cinzel font-weight-bold mb-4">Join us on</h3>
      <div className="card-text px-0 pb-3">
        <ul className="nav justify-content-end list-unstyled d-flex mr-auto ml-auto">
          <li className="ms-3">
            <a href="https://www.facebook.com/KrittikaIITB/" target="_blank" className="mx-sm-2 mx-1">

              <FontAwesomeIcon id="social_fb" icon={["fab", "facebook" ]} className="fa-2x rounded-lg p-2 social-icons" style={{backgroundColor: '#eee'}} />
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.instagram.com/krittika.iitb/" target="_blank" className="mx-sm-2 mx-1">
              <FontAwesomeIcon id="social_insta" icon={["fab", "instagram" ]} className="fa-2x rounded-lg p-2 social-icons" style={{backgroundColor: '#eee'}} />
            </a>
          </li>
          <li className="ms-3">
            <a href="https://github.com/krittikaiitb" target="_blank" className="mx-sm-2 mx-1">
              <FontAwesomeIcon id="social_github" icon={["fab", "github" ]} className="fa-2x rounded-lg p-2 social-icons" style={{backgroundColor: '#eee'}} />
            </a>
          </li>
          <li className="ms-3">
            <a href="mailto:krittika.club@iitb.ac.in" target="_blank" className="mx-sm-2 mx-1">
              <FontAwesomeIcon id="social_mail" icon="envelope" className="fa-2x rounded-lg p-2 social-icons" style={{backgroundColor: '#eee'}} />
            </a>
          </li>
        </ul>
      </div>
     <div className="row">
         <div className="col-md-12">
           <FontAwesomeIcon icon="copyright"/> Copyright <b className="font-weight-bold">·</b>
          Krittika Team
        </div> 
      </div> 
    </footer>
  </div>

);
export default Footer;
