import React from 'react';
import '../../App.css';
import ExportMobileConfig from './exportBarCharts/ExportMobileConfig';
import ExportMonitorConfig from "./exportLineGraphs/ExportMonitorConfig";
// import tutorial from "../../AdminVideo.mp4";
import Footer from "../footer/footer";
import ChatBotLogo from "../../GRTDataHubChatBotLink.png";
import NewActiveCuratorCount from "../helpers/overview/NewActiveCuratorCount";
import NewCuratorCount from "../helpers/overview/NewCuratorCount";
import NewTotalTokensSignalled from "../helpers/overview/NewTotalTokensSignalled";
import NewDelegatorCount from "../helpers/overview/NewDelegatorCount";
import NewActiveDelegatorCount from "../helpers/overview/NewActiveDelegatorCount";
import NewDelegationCount from "../helpers/overview/NewDelegationCount";
import NewActiveDelegationCount from "../helpers/overview/NewActiveDelegationCount";
import NewTotalDelegatedTokens from "../helpers/overview/NewTotalDelegated";
import NewIndexerCount from "../helpers/overview/NewIndexerCount";
import NewActiveIndexerCount from "../helpers/overview/NewActiveIndexerCount";
import NewTotalTokensStaked from "../helpers/overview/NewTotalTokensStaked";
import NewTotalIndexingIndexerRewards from "../helpers/overview/NewTotalIndexingIndexerRewards";
import NewTotalIndexerQueryFeeRebates from "../helpers/overview/NewTotalIndexerQueryFeeRebates";
import NewTotalIndexerQueryFeesCollected from "../helpers/overview/NewTotalIndexerQueryFeesCollected";
// import NewTotalTokensAllocated from "../helpers/NewTotalTokensAllocated";
import NewSubgraphCount from "../helpers/overview/NewSubgraphCount";
import NewActiveSubgraphCount from "../helpers/overview/NewActiveSubgraphCount";
import NewSubgraphDeploymentCount from "../helpers/overview/NewSubgraphDeploymentCount";
import NewCurrentEpoch from "../helpers/overview/NewCurrentEpoch";
import NewDelegationUnbondingPeriod from "../helpers/overview/NewDelegationUnbondingPeriod";
import NewTotalSupply from "../helpers/overview/NewTotalSupply";
// import NewHoldersCount from "../helpers/overview/NewHoldersCount";
import NewTotalQueryFees from "../helpers/overview/NewTotalQueryFees";     
import NewTotalGRTBurned from "../helpers/overview/NewTotalGRTBurned";
import NewTotalGRTMinted from "../helpers/overview/NewTotalGRTMinted";
import NewTotalGRTWithdrawn from "../helpers/overview/NewTotalGRTWithdrawn";
import NewTotalGRTDeposited from "../helpers/overview/NewTotalGRTDeposited";  

const ExportMain = () => {
  return (
      <div className="header-wrapper">
        <div className="export-main">
        <div className="rotate-position">
      <div class="phone">
</div>
<div class="message">
  Please rotate your device to landscape to view export data.<br></br>
</div>
</div>
        <h1 className="adminHeader-text">Welcome to the Export Page!</h1>

        <div className="chatbot-link">
            <a href="/chatBot"><img className="chatbot-link-export" src={ChatBotLogo}  alt="ChatBot Logo"></img></a>
            </div>

        <h1 className="adminHeader-text2">These can be used on YouTube, Twitter, Blogs and within Telegram chats.</h1>

        <br></br>
        
        <h1 className="adminHeader-text2 move-down mobile-config admin-mobile-center">1. Simply Click the Download Button<br></br>2. Press and Hold the screen with your finger<br></br>3. Select Add to Photos / Save Image</h1>
        <h2 className="adminSubheader-text admin-subtitle-centre monitor-config">Simply Click the Download Button</h2>
        <h3 className="adminSubheader-text2 admin-subtitle-centre monitor-config">Please ensure the subtitle is within the image. I would be greatful if you included www.GRTDataHub.com within all social media posts.</h3>
        <h3 className="adminHeader-text2 admin-subtitle-centre mobile-config">Please ensure the subtitle is within the image. I would be greatful if you included www.GRTDataHub.com within all social media posts.</h3>
        <h3 className="adminSubheader-text2 admin-subtitle-centre monitor-config">If you find that the charts do not format correctly on your device, please get in contact and I will be happy to help.</h3>
        <br></br>
        <br></br>

        {/* <div class="header-sub-text"> */}
          {/* <h1 className="data-title"><strong>Overview</strong></h1>
          <hr></hr>
          <h1 className="data-title">Delegators</h1>
          <br></br>
          <NewDelegatorCount />
          <NewActiveDelegatorCount />
          <NewDelegationCount />
          <NewActiveDelegationCount />
          <NewTotalDelegatedTokens />
          <NewDelegationUnbondingPeriod />
          <hr></hr>
          <h2 className="data-title">Indexers</h2>
          <br></br>
          <NewIndexerCount />
          <NewActiveIndexerCount />
          <NewTotalTokensStaked />
          <NewTotalIndexingIndexerRewards />
          <NewTotalIndexerQueryFeeRebates />
          <NewTotalIndexerQueryFeesCollected />
          <hr></hr>
          <h2 className="data-title">Curators</h2>
          <br></br>
          <NewCuratorCount />
          <NewActiveCuratorCount />
          <NewTotalTokensSignalled />
          <hr></hr>
          <h2 className="data-title">Subgraphs</h2>
          <br></br>
          <NewSubgraphCount />
          <NewSubgraphDeploymentCount />
          <NewActiveSubgraphCount />
          <hr></hr>
          <h2 className="data-title">Token Supply</h2>
          <br></br>
          <NewTotalGRTMinted />
          <NewTotalGRTBurned />
          <NewTotalSupply /> 
          <hr></hr>
          <h2 className="data-title">More data</h2>
          <br></br>
          {/* <NewHoldersCount /> */}
          {/* <NewTotalQueryFees />
          <NewCurrentEpoch />
          <NewTotalGRTWithdrawn />
          <NewTotalGRTDeposited />
          <br></br>  */}
     {/* </div> */}
              
   
        {/* <div className="admin-video monitor-config"><video width="400" height="230" className="video" frameborder="0" title="TGN" src={tutorial} controls></video>
  </div> */}

        <div className="mobile-config hide-export"><ExportMobileConfig /></div>
        <div className="monitor-config hide-export"><ExportMonitorConfig /></div>
        <div className="hide-export"><Footer /></div>
      </div>
    </div>
  )

};


export default ExportMain;
