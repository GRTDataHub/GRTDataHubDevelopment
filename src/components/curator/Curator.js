import React from 'react';
import '../../App.css';

const Curator = () => {
  return (
    <div className="header-wrapper">
    <div className="main-info">
    <div className="rotate-position">
  <div class="phone">
</div>
<div class="message">
Please rotate your device to landscape to view the Curators page.
</div>
</div>
    <h1 className="indexer-title">Curators Page - Here you will find all the data for GRT Curators.</h1>
    <h2 className="indexer-subtitle"><strong>Graph Network Billing brought to you by <a className="cla" href="https://dapplooker.com/dapp/graph-network-billing-120192" target="_blank" rel="noreferrer">DappLooker</a></strong></h2>
    <h2 className="indexer-subtitle"><strong>Note:</strong> Please read the Overview and Methodology below to gain a greater understanding of the data within the dashboards.</h2>
    <h2 className="indexer-subtitle">To learn more about how billing works, read <a className="cla" href="https://thegraph.com/docs/en/billing/" target="_blank" rel="noreferrer">here</a>.<br></br>To learn The Graph use Polygon for its billing system, read <a className="cla" href="https://blog.polygon.technology/the-graph-to-use-polygon-for-its-billing-system/" target="_blank" rel="noreferrer">here</a>.</h2>
    <div className="curator"><br></br><br></br><iframe className="b-map" title="Graph Network Billing dashboard" src="http://analytics.dapplooker.com/public/dashboard/c8300bf8-f640-401c-816e-fe1f87e3e1b4" width="1000" height="2400" frameborder="0"></iframe>
        <iframe className="c-map" title="User Billing Balance dashboard "src="http://analytics.dapplooker.com/public/dashboard/3d9b70b0-6e04-4cd4-87aa-8bd92f620ebd" width="1000" height="1460" frameborder="0"></iframe>
        <br></br>
        <br></br>
</div>
  </div>
  </div>
  )
};

export default Curator;
