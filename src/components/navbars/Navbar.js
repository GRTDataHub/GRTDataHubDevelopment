import React from 'react';
import '../../App.css';
import GRTDataHubLogo from "../../GRTDataHubLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img className="logo" src={GRTDataHubLogo}  alt="GRT Data Hub Logo"></img>
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
    {/* <a className="nav-link mobile-nav-link mobile-nav-pages" href="./exportPage">
        Export Page
      </a> */}
      <a className="nav-link dropdown-toggle mobile-nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    News
      </a>
      <ul className="dropdown-menu mobile-dropdown" aria-labelledby="navbarDropdown" aria-label="Toggle navigation">
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="./GraphAdvocatesSpotlight">
        Graph Advocates Spotlight</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="./GraphCentral">
       Graph Central
      </a></li>
      <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="https://www.youtube.com/watch?v=58el3_9oJ6Q&feature=youtu.be" target="_blank" rel="noreferrer">
      Participant Update
      </a></li>
      <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="https://messari.io/report/state-of-the-graph-q1-2023?utm_medium=organic_social&utm_source=twitter_mihaigrigore&utm_campaign=state_of_the_graph_q1_2023" target="_blank" rel="noreferrer">
       Messari Report
      </a></li>
          </ul> 
          <a className="nav-link dropdown-toggle mobile-nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dashboards
      </a>
      <ul className="dropdown-menu mobile-dropdown" aria-labelledby="navbarDropdown" aria-label="Toggle navigation">
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="./indexers">
        Indexers</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="./delegators">
       Delegators
      </a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="./curators">
       Curators
      </a></li>
          </ul>      

    {/* <a className="no-show nav-link dropdown-toggle mobile-nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Bar Charts
      </a>
      <ul className="dropdown-menu mobile-dropdown" aria-labelledby="navbarDropdown" aria-label="Toggle navigation">
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#bar1">Active Delegation Count</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#bar2">Active Indexers</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#bar3">Total Delegated GRT by Delegators</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#bar4">Total Query Fees</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#bar5">Total Signalled GRT</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#bar6">Total Staked GRT</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#bar7">Total Delegated GRT by Indexers</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#bar8">Total GRT Burned</a></li>
          </ul> */}

          {/* <a className="no-show nav-link dropdown-toggle mobile-nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Line Graphs
      </a>
      <ul className="dropdown-menu mobile-dropdown" aria-labelledby="navbarDropdown">
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#line1">Delegators</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#line2">Indexers</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#line3">Staked Indexers</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#line4">Subgraphs</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#line6">GRT Daily Transactions</a></li>
            <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas"><a className="dropdown-item" href="#line7">GRT Bought Hourly</a></li>
          </ul> */}
    </div>
  </div>
</div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav links">
      <li className="nav-item dropdown">
      
          <a className="no-monitor nav-link pages new-link" href="./aboutPage">
            About
          </a>
        </li>

          {/* <li className="nav-item">
          <a className="nav-link export bar" href="./exportPage">
            Export Page
          </a>
          </li> */}

          <li className="nav-item dropdown">
          <a className="no-show nav-link dropdown-toggle bar" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" aria-label="Toggle navigation">
            <li className="dropdown-item"><a className="dropdown-item" href="./GraphAdvocatesSpotlight">
            Graph Advocates Spotlight</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="./GraphCentral">
            Graph Central</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="https://www.youtube.com/watch?v=58el3_9oJ6Q&feature=youtu.be" target="_blank" rel="noreferrer">
            Participant Update</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="https://messari.io/report/state-of-the-graph-q1-2023?utm_medium=organic_social&utm_source=twitter_mihaigrigore&utm_campaign=state_of_the_graph_q1_2023" target="_blank" rel="noreferrer">
            Messari Report</a></li>
          </ul>
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
          <a className="no-show nav-link dropdown-toggle bar" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bar Charts
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" aria-label="Toggle navigation">
            <li className="dropdown-item"><a className="dropdown-item" href="#bar1">Active Delegation Count</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#bar2">Active Indexers</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#bar3">Total Delegated GRT by Delegators</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#bar4">Total Query Fees</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#bar5">Total Signalled GRT</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#bar6">Total Staked GRT</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#bar7">Total Delegated GRT by Indexers</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#bar8">Total GRT Burned</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="no-show nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Line Graphs
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li className="dropdown-item"><a className="dropdown-item" href="#line1">Delegators</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#line2">Indexers</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#line3">Staked Indexers</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#line4">Subgraphs</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#line6">GRT Daily Transactions</a></li>
            <li className="dropdown-item"><a className="dropdown-item" href="#line7">GRT Bought Hourly</a></li>
          </ul>
        </li> */}

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar