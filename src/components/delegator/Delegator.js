import React from 'react';
import '../../App.css';

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
</div>
    <h1 className="indexer-title">Delegator Page - Here you will find all the data about GRT Delegators.</h1>
    <h2 className="indexer-subtitle">It may take a minute for all of the data to load.</h2>
    <h2 className="indexer-subtitle">Please visit the about page to see how to access the data found here.<br></br>If you are using an <strong>android</strong> or <strong>firefox</strong>, this data may not load. But I highly recommend you to visit the link via the about page to view more data.</h2>
    <div className="indexer"><iframe className="map" title="Total Delegators" src="https://thegraph.stake-machine.com/d-solo/-3BUUtbMz?orgId=1&refresh=5m&from=1649167118609&to=1649253518610&theme=dark&panelId=90" width="900" height="400" frameborder="0"></iframe>
        <iframe className="map" title="Unrealised Delegators Yield"src="https://thegraph.stake-machine.com/d-solo/-3BUUtbMz?orgId=1&refresh=5m&from=1649167165439&to=1649253565439&theme=dark&panelId=110" width="900" height="400" frameborder="0"></iframe>
        <br></br>
        <br></br>
</div>
  </div>
  </div>
  )
};

export default Delegator;
