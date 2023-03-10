import React from 'react';
import '../../App.css';
import GRTDataHubLogo from "../../GRTDataHubLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarChatbot = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">  <img className="logo" src={GRTDataHubLogo}  alt="GRT Data Hub Logo"></img>
    <h6 className="brand-text"><strong>GRTDataHub</strong></h6>
    </a>
    
    <button class="btn offcanvas-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <FontAwesomeIcon icon={faBars} color="#53466C" size="lg"/>
</button>

<div class="offcanvas offcanvas-end offcanvas-menu" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
  </div>
  <div class="offcanvas-body links">
    <div class="dropdown mt-3">
    <a className="nav-link mobile-nav-link mobile-nav-pages" href="../">
        Home
      </a>
      <a className="nav-link mobile-nav-link mobile-nav-pages" href="../exportPage">
        Export Page
      </a>
      <a className="nav-link mobile-nav-link mobile-nav-pages" href="../indexers">
    Indexers
      </a>
      <a className="nav-link mobile-nav-link mobile-nav-pages" href="../delegators">
    Delegators
      </a>
    </div>
  </div>
</div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav links">
      <li className="nav-item dropdown">
          <a className="nav-link pages" href="../">
            Home
          </a>
          <a className="nav-link pages" href="../exportPage">
            Export Page
          </a>
          <a className="nav-link pages" href="../indexers">
            Indexers
          </a>
          <a className="nav-link pages" href="../delegators">
            Delegators
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavbarChatbot