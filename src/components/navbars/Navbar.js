import React from 'react';
import '../../App.css';
import GRTDataHubLogo from '../../GRTDataHubLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="logo" src={GRTDataHubLogo} alt="GRT Data Hub Logo" />
          <h6 className="brand-text"><strong>GRTDataHub</strong></h6>
        </a>
        <button className="btn offcanvas-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <FontAwesomeIcon icon={faBars} color="#53466C" size="lg" />
        </button>

        <div className="offcanvas offcanvas-end offcanvas-menu" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body links">
            <div className="dropdown mt-3">
              <a className="nav-link mobile-nav-link mobile-nav-pages" href="./exportPage">
                Export Page
              </a>
              <a className="nav-link dropdown-toggle mobile-nav-link" href="#" id="navbarDropdownNews" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                News
              </a>
              <ul className="dropdown-menu mobile-dropdown" aria-labelledby="navbarDropdownNews" aria-label="Toggle navigation">
                <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas">
                  <a className="dropdown-item" href="./GraphAdvocatesSpotlight">Graph Advocates Spotlight</a>
                </li>
                <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas">
                  <a className="dropdown-item" href="./GraphCentral">Graph Central</a>
                </li>
                <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas">
                  <a className="dropdown-item" href="https://www.youtube.com/watch?v=QO9RgwF79sI&list=PLTqyKgxaGF3SerCqOuIT-FdaXZASg3U-C&index=3" target="_blank" rel="noreferrer">
                    Participant Update
                  </a>
                </li>
                <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas">
                  <a className="dropdown-item" href="https://messari.io/report/state-of-the-graph-q1-2023?referrer=all-research" target="_blank" rel="noreferrer">
                    Messari Report
                  </a>
                </li>
              </ul>
              <a className="nav-link dropdown-toggle mobile-nav-link" href="#" id="navbarDropdownDashboards" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dashboards
              </a>
              <ul className="dropdown-menu mobile-dropdown" aria-labelledby="navbarDropdownDashboards" aria-label="Toggle navigation">
                <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas">
                  <a className="dropdown-item" href="./indexers">Indexers</a>
                </li>
                <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas">
                  <a className="dropdown-item" href="./delegators">Delegators</a>
                </li>
                <li className="dropdown-item-start" data-bs-target="#offcanvasExample" data-bs-dismiss="offcanvas">
                  <a className="dropdown-item" href="./curators">Curators</a>
                </li>
              </ul>
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

            <li className="nav-item">
              <a className="nav-link export bar" href="./exportPage">
                Export Page
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="no-show nav-link dropdown-toggle bar" href="#" id="navbarDropdownNews" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                News
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownNews" aria-label="Toggle navigation">
                <li className="dropdown-item">
                  <a className="dropdown-item" href="./GraphAdvocatesSpotlight">Graph Advocates Spotlight</a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-item" href="./GraphCentral">Graph Central</a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-item" href="https://www.youtube.com/watch?v=QO9RgwF79sI&list=PLTqyKgxaGF3SerCqOuIT-FdaXZASg3U-C&index=3" target="_blank" rel="noreferrer">
                    Participant Update
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-item" href="https://messari.io/report/state-of-the-graph-q1-2023?referrer=all-research" target="_blank" rel="noreferrer">
                    Messari Report
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="no-show nav-link dropdown-toggle bar" href="#" id="navbarDropdownDashboards" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dashboards
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownDashboards" aria-label="Toggle navigation">
                <li className="dropdown-item">
                  <a className="dropdown-item" href="./indexers">Indexers</a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-item" href="./delegators">Delegators</a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-item" href="./curators">Curators</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
