import React from 'react';
import '../../App.css';
// logos
import GRTDataHubLogo from "../../GRTDataHubLogo.png";
// import GraphtronautsLogo from "../GraphtronautsLogo.svg";
// import DataLogo from "../Data.png";

const PrivacyPolicyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className="logo" src={GRTDataHubLogo}  alt="GRT Data Hub Logo"></img>
      {/* <img className="logo" src={GraphtronautsLogo}  alt="Graphtronauts Logo"></img> */}
    {/* <img className="data-logo" src={DataLogo}  alt="Data Logo"></img> */}
    <h6 className="brand-text"><strong>GRTDataHub</strong></h6>
    {/* <h6 className="brand-text"><strong>GraphtronautsDataHub</strong></h6> */}
    </a>
  </div>
</nav>
  )
}

export default PrivacyPolicyNavbar;