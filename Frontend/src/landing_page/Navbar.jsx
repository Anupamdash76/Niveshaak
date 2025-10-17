import'./navbar.css';
function Navbar() {
  return (
    <nav
  className="navbar navbar-expand-lg border-bottom navcol"
  style={{ color:"#DADBDB", border: "none" }}
>

      <div className="container-fluid p-2 main-div">
        {/* Left Logo + Brand */}
        <div className="d-flex align-items-center me-auto main-div-logo ">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="media/images/logo2.jpg"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
              alt="Logo"
            />
            <h4 className="m-0 niveshak-text"><b>NIVESHAK</b></h4>
          </a>
        </div>

        {/* Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
       <div className="collapse navbar-collapse  nav-opacity-transition main-div-text" id="navbarSupportedContent">
            <form className="d-flex ms-auto" role="search">
                <ul className="navbar-nav mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active opacity-transition" aria-current="page" href="./signup">
                            Signup
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active opacity-transition" href="./about">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active opacity-transition" href="./product">
                          Product
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active opacity-transition" href="./pricing">
                            Pricing
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active opacity-transition" href="./support">
                            Support
                        </a>
                    </li>
                </ul>
            </form>
        </div>

    </div>
</nav>
);
}

export default Navbar;
