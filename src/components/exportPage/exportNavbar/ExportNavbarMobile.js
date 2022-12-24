import React from 'react';
import '../../../App.css';
import GRTDataHubLogo from "../../../GRTDataHubLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ExportNavbarMobile = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className="logo" src={GRTDataHubLogo}  alt="GRT Data Hub Logo"></img>
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
    <a className="nav-link mobile-nav-link mobile-nav-pages" href="./">
        Home
      </a>
    <a className="nav-link mobile-nav-link mobile-nav-pages" href="./indexers">
        Indexers
      </a>
      <a className="nav-link mobile-nav-link mobile-nav-pages" href="./delegators">
       Delegators
      </a>
    
    <a className="nav-link dropdown-toggle mobile-nav-link" href="#" id="navbarDropdownMobileBar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Mobile Bar Charts
      </a>
      <ul className="dropdown-menu mobile-dropdown" aria-labelledby="navbarDropdownMobileBar" aria-label="Toggle navigation">
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar1">Active Delegators</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar2">Holders</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar3">Subgraphs</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar4">Curators</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar5">Active Delegation Count</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar6">Active Indexers</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar7">Total Delegated GRT by Delegators</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar8">Total Query Fees</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar9">Total Signalled GRT</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar10">Total Staked GRT</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar11">Total Delegated GRT by Indexers</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobilebar12">Total Burned GRT</a></li>
          </ul>

          <a className="nav-link dropdown-toggle mobile-nav-link" href="#" id="navbarDropdownMobileLine" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Mobile Line Graphs
      </a>
      <ul className="dropdown-menu mobile-dropdown" aria-labelledby="navbarDropdownMobileLine">
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobileline1">Delegators</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobileline2">Indexers</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobileline3">Staked Indexers</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#mobileline4">Subgraphs</a></li>
          </ul>
    </div>
  </div>
</div>
  </div>
</nav>
  )
}

export default ExportNavbarMobile