import React from 'react';
import '../../App.css';
import ChatBotLogo from "../../GRTDataHubChatBotLink.png";

const Indexer = () => {
  return (
      <div className="header-wrapper">
        <div className="export-main">
        <div className="rotate-position">
      <div class="phone">
</div>
<div class="message">
  Please rotate your device to landscape to view the Indexer page.
</div>
<div className="chatbot-link">
            <a href="/chatBot"><img className="chatbot-link-export" src={ChatBotLogo}  alt="ChatBot Logo"></img></a>
            </div>
</div>
        <h1 className="indexer-title">Indexer Page - Here you will find all the data about GRT Indexers.</h1>
        {/* <h2 className="indexer-subtitle">It may take a minute for all of the data to load.</h2> */}
        {/* <h2 className="indexer-subtitle">Please visit the about page to see how to access the data found here.<br></br>If you are using an <strong>android</strong> or <strong>firefox</strong>, this data may not load. But I highly recommend you to visit the link via the about page to view more data.</h2> */}
        <div className="indexer indexer-dash"><iframe className="map" title="Indexers" src="https://thegraph.stake-machine.com/d-solo/-3BUUtbMz?orgId=1&refresh=5m&from=1649154550894&to=1649240950894&theme=dark&panelId=92" width="900" height="400" frameborder="0"></iframe>
        <iframe className="tokens" title="Total Tokens Indexers Control"src="https://thegraph.stake-machine.com/d-solo/-3BUUtbMz?orgId=1&refresh=5m&from=1649154550894&to=1649240950894&theme=dark&panelId=88" width="900" height="400" frameborder="0"></iframe>
        <iframe className="rewards" title="Total Indexers Collected Rewards"src="https://thegraph.stake-machine.com/d-solo/-3BUUtbMz?orgId=1&refresh=5m&from=1649154550894&to=1649240950894&theme=dark&panelId=86" width="900" height="400" frameborder="0"></iframe>
        <iframe className="uncollected-rewards" title="Uncollected Rewards By Indexers" src="https://thegraph.stake-machine.com/d-solo/-3BUUtbMz?orgId=1&refresh=5m&from=1649154550894&to=1649240950894&theme=dark&panelId=10" width="900" height="400" frameborder="0"></iframe>
        <iframe  className="rewards-per-hour" title="Indexer Reward Rate Per Hour" src="https://thegraph.stake-machine.com/d-solo/-3BUUtbMz?orgId=1&refresh=5m&from=1649154550894&to=1649240950894&theme=dark&panelId=14" width="900" height="400" frameborder="0"></iframe>
  </div>
      </div>
    </div>
  )
};

export default Indexer;
