import Link from 'next/link'

const Navbar = ()=> (
    <nav className="navbar fixed-top navbar-inverse navbar-expand-lg navbar-dark bg-dark topNavBar cinzel">
  <Link href="/">
    <img
      src="/img/logo_gif.gif"
      alt="logo_gif"
      className="rounded-lg"
      height="50px"
    />
  </Link>
  <a className="navbar-brand mx-md-4 font-weight-light" href="{% url 'home' %}">
    {" "}
    <h3 style={{ marginBottom: 0 }}>Krittika</h3>
    {/* <a class="font-weight-light h3 mx-md-4 mx-0" href="{% url 'home' %}">Krittika</a> */}
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mx-1">
        <a
          className="btn btn-link text-light my-2 my-sm-0 mx-4"
          href="{% url 'team' %}"
        >
          <b className="lead">Our Team</b>
        </a>
      </li>
      <li className="nav-item my-2 mx-md-0 mx-3">
        {/*DARK-MODE-SWITCH*/}
        <div className="custom-control custom-switch m-0 p-0">
          <input
            type="checkbox"
            className="custom-control-input d-none"
            id="darkSwitch"
          />
          <label
            className="custom-control-label darkToggle"
            htmlFor="darkSwitch"
          >
            {/* <img src="{% static 'img/dark-mode-toggle-2.svg' %}" width="25px" alt="dark_mode" id="darkModeImg" onclick="changeImage()"> */}
            <div className="dark-mode-img" />
          </label>
        </div>
      </li>
    </ul>
  </div>
</nav>

)

export default Navbar;