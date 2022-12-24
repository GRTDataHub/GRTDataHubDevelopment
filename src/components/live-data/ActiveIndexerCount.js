import React from 'react';
import '../../App.css';

// logos
import GRTDataHubLogo from "../../GRTDataHubLogo.png";

import { ActiveIndexersCountBar } from "../mainBarCharts/BarChartsData";

class ActiveIndexerCount extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
          <a className="navbar-brand" href="/">
    <img className="logo" src={GRTDataHubLogo}  alt="GRT Data Hub Logo"></img>
    <h6 className="brand-text"><strong>GRTDataHub</strong></h6></a>
    <a className="brant-text mobile-nav-pages hide-telegram" href="../">
        View Full App
      </a>
<div className="hide-telegram top-telegram"><ActiveIndexersCountBar /></div>    

       <div className="rotate-position">
      <div class="phone">
</div>
<div class="message">
  Please rotate your device or view on a larger screen size to see data.
</div>
</div>
      </div>
      
      

  )
}};

export default ActiveIndexerCount;