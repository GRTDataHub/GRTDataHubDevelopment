import React, { Component } from 'react';
import '../../App.css';
import BarCharts from "../mainBarCharts/BarCharts";
import LineGraphs from "../mainLineGraphs/LineGraphs";
import Footer from "../footer/footer";
// import GRTDataHubAllLogosHorizontal from "../../GRTDataHubAllLogosHorizontal.png";
import GRTDataHubAllLogosHorizontal2 from "../../GRTDataHubAllLogosHorizontal2.png";
// font awesome 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faTelegramPlane, faReddit, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ActiveDelegatorCountBar, { HoldersCountBar, SubgraphCountBar, CuratorCountBar, ActiveDelegatorCountData, ActiveDelegationCountData, HoldersCountData, SubgraphsCountData, CuratorsCountData, ActiveIndexerCountData, TotalGRTDelegatedByDelegatorsData, TotalQueryFeesCountData, TotalGRTSignalledByCuratorsData,  TotalStakedGRTCountData, TotalDelegatedGRTByIndexersCountData, TotalGRTBurnedCountData} from "./BarChartsData";
// import { YoutubeVideo } from '../YoutubeVideo';
// import YoutubeSubscibeButton from "../YoutubeSubscribeButton";
import ChatBotLogo from "../../GRTDataHubChatBotLink.png";

class Main extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="main-info">
          <h1 className="header-text">The Graph (GRT) Data.<br></br>Anywhere. Any time. Any device.</h1><br></br><br></br>
          <h1 className="header-sub-text"><strong>Bringing The Graph communities together through daily data statistics.</strong></h1><br></br>
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
          <h1 className="header-sub-text">We work closely with the above communities from around the world to share the GRT data on a daily basis with photo and video content provided.<br></br><br></br>Visit our <a className="home-link" href="/aboutPage">about</a> page to find out more and the links to connect with the above communities.</h1><br></br>
          <h1 className="header-sub-text"><a className="home-link" href="./GraphAdvocatesSpotlight" target="_blank" rel="noreferrer">Graph Advocates Spotlight</a></h1>
          <br></br><br></br>
          <h1 className="header-sub-text">Charts featured in <a className="home-link" href="https://www.youtube.com/channel/UCPAUeNaRtBV-jdSKY8wmcXg" target="_blank" rel="noreferrer">The Graphtronauts News</a></h1><br></br><br></br><h1 className="header-sub-text"><a className="home-link" href="https://youtu.be/58el3_9oJ6Q" target="_blank" rel="noreferrer">Q3 2022 Participant Update</a></h1><br></br><br></br><h1 className="header-sub-text">Analytics featured in the <a className="home-link" href="https://messari.io/report/state-of-the-graph-q3-2022?utm_source=twitter_mihaigrigore&utm_medium=organic_social&utm_campaign=state_of_graph_q3_2022" target="_blank" rel="noreferrer">Messari Quarterly Reports</a></h1>
          <br></br><br></br>

          
          {/* <img className="dataHub-logos" src={GraphtronautsDataHubLogos}  alt="Graphtronauts Data Hub Logos"></img> */}
          {/* <div className="video">
              <YoutubeVideo />
              </div>      */}
          {/* <div className="g-ytsubscribe">
              <YoutubeSubscibeButton/> 
              </div>                             */}
          
          <div className="photo-wrap container news-charts">
            <div className="row top">
              <div className="col-lg-6">
                <div className="photo-wrap">
                  <div alt="Active Delegators" className="newsGraph1"><ActiveDelegatorCountBar /></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="photo-wrap">
                  <div alt="Holders" className="newsGraph2"><HoldersCountBar /></div>
                </div>
              </div>
            </div>
            <div className="row bottom">
              <div className="col-lg-6">
                <div className="photo-wrap">
                  <div alt="Subgraphs" className="newsGraph3"><SubgraphCountBar /></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="photo-wrap">
                  <div alt="Curators" className="newsGraph4"><CuratorCountBar /></div>
                </div>
              </div>
            </div>
          </div>

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
        
            <div class="home-message no-show-monitor">
              Please rotate your device or view on a larger screen size to see data in bar chart and line graph format.
            </div>
      
          <BarCharts />
          <LineGraphs />
          <Footer />
        </div>
      </div>
    )
  }
};

export default Main;