import React, { Component } from 'react';
import '../../App.css';
import GRTDataHubAllLogosHorizontal3 from "../../GRTDataHub-AllLogosHorizontal-3.png";
import MobileBarCharts from "../mainBarCharts/MobileBarCharts";
import MobileLineGraphs from "../mainLineGraphs/MobileLineGraphs";
import MonitorBarCharts from "../mainBarCharts/MonitorBarCharts";
import MonitorLineGraphs from "../mainLineGraphs/MonitorLineGraphs";
import Footer from "../footer/footer";

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
  
// font awesome 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faTelegramPlane, faReddit, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import  {ActiveDelegatorCountData, ActiveDelegationCountData, HoldersCountData, SubgraphsCountData, CuratorsCountData, ActiveIndexerCountData, TotalGRTDelegatedByDelegatorsData, TotalQueryFeesCountData, TotalGRTSignalledByCuratorsData,  TotalStakedGRTCountData, TotalDelegatedGRTByIndexersCountData, TotalGRTBurnedCountData} from "./BarChartsData";
// import { YoutubeVideo } from '../YoutubeVideo';
// import YoutubeSubscibeButton from "../YoutubeSubscribeButton";
import ChatBotLogo from "../../GRTDataHubChatBotLink.png";
        
  class Main extends Component {
    state = {
      isImageLoaded: false
    }
  
    handleImageLoad = () => {
      this.setState({ isImageLoaded: true });
    }
  
    render() {
      const { isImageLoaded } = this.state;

    return (
     <div className={`header-wrapper ${isImageLoaded ? 'loaded' : ''}`}>
        {!isImageLoaded && (
          <div className="loading-message">Loading...</div>
        )}
        <div className="main-info">
          <div className="chatbot-link">
            <a href="/chatBot"><img className="chatbot-link-logo" src={ChatBotLogo}  target="_blank" alt="ChatBot Logo"></img></a>
            </div>

          <div className="community-logo-div">
          <img className="community-logo" src={GRTDataHubAllLogosHorizontal3} alt="GRT Data Hub Communities" onLoad={this.handleImageLoad}></img>
            {/* <span className="telegram"><a href="https://t.me/GraphtronautsDataHub" target="_blank" rel="noreferrer"><h3 className="telegram-icon"><FontAwesomeIcon className="icon" icon={faTelegramPlane} color="#53466C" size="lg" /></h3></a></span>
            <span className="twitter"><a href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer"><h3 className="twitter-icon"><FontAwesomeIcon className="icon" icon={faTwitter} color="#53466C" size="lg" /></h3></a></span> */}
            {/* <span className="reddit"><a href="https://www.reddit.com/user/bitcoin_zpt?utm_medium=android_app&utm_source=share" target="_blank" rel="noreferrer"><h3 className="reddit-icon"><FontAwesomeIcon className="icon" icon={faReddit} color="#53466C" size="lg"/></h3></a></span>
                <span className="youtube"><a href="https://youtube.com/channel/UCfWakD5bnrOD_mq8uXlNnbg" target="_blank" rel="noreferrer"><h3 className="youtube-icon"><FontAwesomeIcon className="icon" icon={faYoutube} color="#53466C" size="lg"/></h3></a></span> */}
          </div>
          {isImageLoaded && (
            <>
          <h1 className="header-sub-text">We work closely with the above communities from around the world to share the GRT data on a daily basis with photo and video content provided.<br></br><br></br>Visit our <a className="home-link" href="/aboutPage">about</a> page to find out more and the links to connect with the above communities.</h1>
          <br></br><br></br>

          <div class="header-sub-text">
          <h1 className="data-title"><strong>Overview</strong></h1>
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
          <NewTotalQueryFees />
          <NewCurrentEpoch />
          <NewTotalGRTWithdrawn />
          <NewTotalGRTDeposited />
     </div>
     <br></br>
          
          {/* <img className="dataHub-logos" src={GraphtronautsDataHubLogos}  alt="Graphtronauts Data Hub Logos"></img> */}
          {/* <div className="video">
              <YoutubeVideo />
              </div>      */}
          {/* <div className="g-ytsubscribe">
              <YoutubeSubscibeButton/> 
              </div>                             */}

          {/* Data For Mobile Start*/}

          {/* <div class="message no-show-monitor">
              <ActiveDelegatorCountData />
            </div>

            <div class="message no-show-monitor">
            <ActiveDelegationCountData />
            </div>

            <div class="message no-show-monitor">
            <HoldersCountData />
            </div>
            
            <div class="message no-show-monitor">
            <SubgraphsCountData />
            </div>
           
            <div class="message no-show-monitor">
            <CuratorsCountData />
            </div>

            <div class="message no-show-monitor">
            <ActiveIndexerCountData />
            </div>
           
            <div class="message no-show-monitor">
            <TotalGRTDelegatedByDelegatorsData />
            </div>
            
            <div class="message no-show-monitor">
            <TotalQueryFeesCountData />
            </div>
            
            <div class="message no-show-monitor">
            <TotalGRTSignalledByCuratorsData />
            </div>
           
            <div class="message no-show-monitor">
            <TotalStakedGRTCountData />
            </div>

            <div class="message no-show-monitor">
            <TotalDelegatedGRTByIndexersCountData />
            </div>

            <div class="message no-show-monitor">
            <TotalGRTBurnedCountData />
            </div> */}
            
          {/* Data For Mobile End */}
        
            {/* <div class="home-message no-show-monitor">
              Please rotate your device or view on a larger screen size to see data in bar chart and line graph format.
            </div> */}
      
         <MobileBarCharts />
          <MonitorBarCharts /> 
          <MobileLineGraphs />
          <MonitorLineGraphs />
          <div>
          <h3 className="extra-data">Please check the Dashboards in the Navbar for more data. Check out the <a className="data-link" href="https://thegraph.com/explorer/network" target="_blank" rel="noreferrer">Graph Explorer Activity</a> or</h3>
          <h3 className="extra-data2">to view the live <a className="data-link" href="https://thegraph.com/explorer/network/epochs" target="_blank" rel="noreferrer">Epoch Data</a>.</h3></div>
          <Footer />
          </>
          )}
        </div>
      </div>
      )
    }
  };

export default Main;