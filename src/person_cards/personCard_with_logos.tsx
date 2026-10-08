// person card with links to insta/ linkedin

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
import '@fortawesome/fontawesome-svg-core/styles.css'
library.add(faInstagram, faLinkedin)

export interface LogoPersonProps{
    name: string,
    post: string,
    insta: string,
    linkd: string,
    img?: string,
}


export default function LogoPersonCard({name, post, insta="https://youtu.be/QDia3e12czc?si=D6YIv-9sxBqHs-xr", linkd="https://youtu.be/QDia3e12czc?si=D6YIv-9sxBqHs-xr", img="/img/team/default_profile.png"}: LogoPersonProps){
    return(
        <div className="col-md-4 mb-4">
        <div className="card border-0 shadow bg-light">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title mb-0">{name}</h5>
            <p className="card-text">{post}</p>
          </div>

          <div className="card-text px-0 pb-2">
            <ul className="nav justify-content-center list-unstyled d-flex mr-auto ml-auto">
              <li className="ms-3">
                <a href={insta} target="_blank" rel="noreferrer" className="mx-sm-2 mx-1 text-decoration-none text-reset">
                  <FontAwesomeIcon id="social_insta" icon={["fab", "instagram" ]} className="fa-2x rounded-lg p-2 social-icons" style={{color:'currentColor', backgroundColor: '#eee'}} />
                </a>
              </li>
              <li className="ms-3">
                <a href={linkd} target="_blank" rel="noreferrer" className="mx-sm-2 mx-1 text-decoration-none text-reset">
                  <FontAwesomeIcon id="social_linkedin" icon={["fab", "linkedin" ]} className="fa-2x rounded-lg p-2 social-icons" style={{color:'currentColor', backgroundColor: '#eee'}} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}