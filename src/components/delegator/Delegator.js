import React from 'react';
import '../../App.css';
import ChatBotLogo from "../../GRTDataHubChatBotLink.png";

const Delegator = () => {
  return (
    <div className="header-wrapper">
    <div className="main-info">
    <div className="rotate-position">
  <div class="phone">
</div>
<div class="message">
Please rotate your device to landscape to view the Delegator page.
</div>
<div className="chatbot-link">
            <a href="/chatBot"><img className="chatbot-link-export" src={ChatBotLogo}  alt="ChatBot Logo"></img></a>
            </div>
</div>
<h1 className="indexer-title">Delegator Page - Here you will find all the data for GRT Delegators.</h1>
    <h2 className="indexer-subtitle"><strong>Graph Network - Delegator Behavioral Analysis brought to you by <a className="cla" href="https://dapplooker.com/dapp/graph-network-billing-120192" target="_blank" rel="noreferrer">DappLooker</a></strong></h2>
  
    <div className="curator">
        <iframe className="d-map" title="Delegator Behavioral Analysis"src="https://analytics.dapplooker.com/public/dashboard/6c74d5fd-2639-4ed5-baf8-3e4d0b858008" width="1200" height="3000" frameborder="0"></iframe>
        <br></br>
        <br></br>
</div>
  </div>
  </div>
  )
};

export default Delegator;
