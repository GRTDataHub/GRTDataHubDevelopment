import React, { Component } from 'react';
import '../../App.css';
import MobileBarCharts from "../mainBarCharts/MobileBarCharts";
import MobileLineGraphs from "../mainLineGraphs/MobileLineGraphs";
import MonitorBarCharts from "../mainBarCharts/MonitorBarCharts";
import MonitorLineGraphs from "../mainLineGraphs/MonitorLineGraphs";
import Footer from "../footer/footer";
import GRTDataHubAllLogosHorizontal2 from "../../GRTDataHub-AllLogosHorizontal-2.png";
// font awesome 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faTelegramPlane, faReddit, faYoutube } from "@fortawesome/free-brands-svg-icons";
import  {ActiveDelegatorCountData, ActiveDelegationCountData, HoldersCountData, SubgraphsCountData, CuratorsCountData, ActiveIndexerCountData, TotalGRTDelegatedByDelegatorsData, TotalQueryFeesCountData, TotalGRTSignalledByCuratorsData,  TotalStakedGRTCountData, TotalDelegatedGRTByIndexersCountData, TotalGRTBurnedCountData} from "./BarChartsData";
// import { YoutubeVideo } from '../YoutubeVideo';
// import YoutubeSubscibeButton from "../YoutubeSubscribeButton";
import ChatBotLogo from "../../GRTDataHubChatBotLink.png";

class Main extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="main-info">
          <div className="chatbot-link">
            <a href="/chatBot"><img className="chatbot-link-logo" src={ChatBotLogo}  target="_blank" alt="ChatBot Logo"></img></a>
            </div>

          <div className="community-logo-div">
          <img className="community-logo" src={GRTDataHubAllLogosHorizontal2}  alt="GRT Data Hub Communities"></img>
            {/* <span className="telegram"><a href="https://t.me/GraphtronautsDataHub" target="_blank" rel="noreferrer"><h3 className="telegram-icon"><FontAwesomeIcon className="icon" icon={faTelegramPlane} color="#53466C" size="lg" /></h3></a></span>
            <span className="twitter"><a href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer"><h3 className="twitter-icon"><FontAwesomeIcon className="icon" icon={faTwitter} color="#53466C" size="lg" /></h3></a></span> */}
            {/* <span className="reddit"><a href="https://www.reddit.com/user/bitcoin_zpt?utm_medium=android_app&utm_source=share" target="_blank" rel="noreferrer"><h3 className="reddit-icon"><FontAwesomeIcon className="icon" icon={faReddit} color="#53466C" size="lg"/></h3></a></span>
                <span className="youtube"><a href="https://youtube.com/channel/UCfWakD5bnrOD_mq8uXlNnbg" target="_blank" rel="noreferrer"><h3 className="youtube-icon"><FontAwesomeIcon className="icon" icon={faYoutube} color="#53466C" size="lg"/></h3></a></span> */}
          </div>
          <h1 className="header-sub-text">We work closely with the above communities from around the world to share the GRT data on a daily basis with photo and video content provided.<br></br><br></br>Visit our <a className="home-link" href="/aboutPage">about</a> page to find out more and the links to connect with the above communities.</h1>
          <br></br><br></br>

          <div class="adminSubheader-text2 admin-subtitle-centre monitor-config">
              <ActiveDelegatorCountData />
              <ActiveDelegationCountData />
              <HoldersCountData />
              <SubgraphsCountData />
              <CuratorsCountData />
              <ActiveIndexerCountData />
              <TotalGRTDelegatedByDelegatorsData />
              <TotalQueryFeesCountData />
              <TotalGRTSignalledByCuratorsData />
              <TotalStakedGRTCountData />
              <TotalDelegatedGRTByIndexersCountData />
              <TotalGRTBurnedCountData />
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

          <div class="message no-show-monitor">
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
            </div>
            
          {/* Data For Mobile End */}
        
            {/* <div class="home-message no-show-monitor">
              Please rotate your device or view on a larger screen size to see data in bar chart and line graph format.
            </div> */}
      
          <MobileBarCharts />
          <MonitorBarCharts />
          <MobileLineGraphs />
          <MonitorLineGraphs />
          
          <div className="photo-wrap chartImg6 Holders no-show-monitor holders-pos reveal" alt="Holders"><span class="anchor" id="line8"></span><iframe id="capture" className="map HoldersGraph" title="Shrimps | Wallets with 1-5k GRT" src="https://dune.com/embeds/2052373/3395279" width="300" height="100" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Crab | Wallets with 5k-10k GRT" src="https://dune.com/embeds/2052376/3395285" width="300" height="100" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Octopus | Wallets with 10k-50k GRT" src="https://dune.com/embeds/2052378/3395289" width="300" height="100" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Fish | Wallets with 50k-100k GRT" src="https://dune.com/embeds/2052380/3395292" width="300" height="100" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Dolphin | Wallets with 100k-500k GRT" src="https://dune.com/embeds/2052381/3395294" width="300" height="100" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Shark | Wallets with 500k-1M GRT" src="https://dune.com/embeds/2052387/3395302" width="300" height="100" frameborder="0"></iframe><iframe className="map HoldersGraphBottom" title="Whale | Wallets with > 1M GRT" src="https://dune.com/embeds/2052388/3395303" width="600" height="100" frameborder="0"></iframe>
          </div>     

             <div className="photo-wrap chartImg6 Holders monitor-config reveal" alt="Holders"><span class="anchor" id="line8"></span><iframe id="capture" className="map HoldersGraph" title="Shrimps | Wallets with 1-5k GRT" src="https://dune.com/embeds/2052373/3395279" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Crab | Wallets with 5k-10k GRT" src="https://dune.com/embeds/2052376/3395285" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Octopus | Wallets with 10k-50k GRT" src="https://dune.com/embeds/2052378/3395289" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Fish | Wallets with 50k-100k GRT" src="https://dune.com/embeds/2052380/3395292" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Dolphin | Wallets with 100k-500k GRT" src="https://dune.com/embeds/2052381/3395294" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Shark | Wallets with 500k-1M GRT" src="https://dune.com/embeds/2052387/3395302" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraphBottom" title="Whale | Wallets with > 1M GRT" src="https://dune.com/embeds/2052388/3395303" width="900" height="70" frameborder="0"></iframe>
          </div>       
          <div>
          <h3 className="extra-data">Please check the Dashboards in the Navbar for more data. Check out the <a className="data-link" href="https://thegraph.com/explorer/network" target="_blank" rel="noreferrer">Graph Explorer Activity</a> or</h3>
          <h3 className="extra-data2">to view the live <a className="data-link" href="https://thegraph.com/explorer/network/epochs" target="_blank" rel="noreferrer">Epoch Data</a>.</h3></div>
          <Footer />
        </div>
      </div>
    )
  }
};

export default Main;