import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="sticky-top navbar navbar-expand-lg border-bottom border-secondary-subtle border-opacity-10"
      style={{
      backgroundColor: '#212529'
    }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          no bullshit website.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav justify-content-between w-25">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="#">
              Snippets
            </a>
            <a className="nav-link" href="#">
              Blog
            </a>
            {/* <a className="nav-link disabled">Disabled</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
