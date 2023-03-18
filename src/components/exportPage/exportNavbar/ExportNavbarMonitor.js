import React from 'react';
import '../../../App.css';
import GRTDataHubLogo from "../../../GRTDataHubLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ExportNavbarMonitor = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className="logo" src={GRTDataHubLogo}  alt="GRT Data Hub Logo"></img>
    <h6 className="brand-text"><strong>GRTDataHub</strong></h6>
    </a>
    
    <button class="btn offcanvas-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <FontAwesomeIcon icon={faBars} color="#53466C" size="lg"/>
</button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent2">
      <ul className="navbar-nav links">
      <li className="nav-item">
          <a className="nav-link export bar" href="./">
            Home
          </a>
          </li>

          <li className="nav-item dropdown">
          <a className="no-show nav-link dropdown-toggle bar" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dashboards
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" aria-label="Toggle navigation">
            <li className="dropdown-item"><a className="dropdown-item" href="./indexers">
            Indexers</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="./delegators">
            Delegators</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="./curators">
            Curators</a></li>
          </ul>
          </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle bar" href="#" id="navbarDropdownMonitorBar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Monitor Bar Charts
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMonitorBar" aria-label="Toggle navigation">
          <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar1">Active Delegators</a></li>
          <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar2">Holders</a></li>
          <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar3">Subgraphs</a></li>
          <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar4">Curators</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar5">Active Delegation Count</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar6">Active Indexers</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar7">Total Delegated GRT by Delegators</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar8">Total Query Fees</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar9">Total Signalled GRT</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar10">Total Staked GRT</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar11">Total Delegated GRT by Indexers</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorbar12">Total Burned GRT</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMonitorLine" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Monitor Line Graphs
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMonitorLine">
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorline1">Delegators</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorline2">Indexers</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorline3">Staked Indexers</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#monitorline4">Subgraphs</a></li>
          </ul>
        </li> */}
  
      </ul>
    </div>
  </div>
</nav>
  )
}

export default ExportNavbarMonitor