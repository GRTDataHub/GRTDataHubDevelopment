import React from 'react';
import '../../App.css';
import ExportMobileConfig from './exportBarCharts/ExportMobileConfig';
import ExportMonitorConfig from "./exportLineGraphs/ExportMonitorConfig";
// import tutorial from "../../AdminVideo.mp4";
import Footer from "../footer/footer";
import ChatBotLogo from "../../GRTDataHubChatBotLink.png";
import ActiveDelegatorCountBar, { HoldersCountBar, SubgraphCountBar, CuratorCountBar, ActiveDelegatorCountData, ActiveDelegationCountData, HoldersCountData, SubgraphsCountData, CuratorsCountData, ActiveIndexerCountData, TotalGRTDelegatedByDelegatorsData, TotalQueryFeesCountData, TotalGRTSignalledByCuratorsData,  TotalStakedGRTCountData, TotalDelegatedGRTByIndexersCountData, TotalGRTBurnedCountData} from "../mainBarCharts/BarChartsData";

const ExportMain = () => {
  return (
      <div className="header-wrapper">
        <div className="main-info">
        <div className="rotate-position">
      <div class="phone">
</div>
<div class="message">
  Please rotate your device to landscape to view export data.<br></br>
</div>
</div>
        <h1 className="adminHeader-text">Welcome to the Export Page.</h1>

        <div className="chatbot-link">
            <a href="/chatBot"><img className="chatbot-link-export" src={ChatBotLogo}  alt="ChatBot Logo"></img></a>
            </div>

        <h1 className="adminHeader-text2">These can be used on YouTube, Twitter, Blogs and within Telegram Chats.</h1>
        <h1 className="adminHeader-text2 move-down mobile-config admin-mobile-center">1. Click Export Button<br></br>2. Download PNG Image<br></br>3. Or Select View<br></br>4. Press and Hold the screen with finger<br></br>5. Select Add to Photos / Save Image</h1>
        <h2 className="adminSubheader-text admin-subtitle-centre monitor-config">1. Click Export Button</h2>
        <h2 className="adminSubheader-text admin-subtitle-centre monitor-config">2. Download PNG Image</h2>
        <h2 className="adminSubheader-text admin-subtitle-centre  monitor-config">3. Or Select View</h2>
        <h2 className="adminSubheader-text admin-subtitle-centre  monitor-config">4. Press and Hold the screen with finger</h2>
        <h2 className="adminSubheader-text admin-subtitle-centre monitor-config">5. Select Add to Photos / Save Image</h2>
        <h3 className="adminSubheader-text2 admin-subtitle-centre monitor-config">To be used for The Graph News, YouTube, Twitter  and within the Telegram chats. Please ensure the subtitle is within the image. I would be greatful if you included www.GRTDataHub.com within all social media posts.</h3>
        <h3 className="adminHeader-text2 admin-subtitle-centre mobile-config">If you find that the charts do not format correctly on your device, please get in contact and I will be happy to help.</h3>

        <h3 className="adminSubheader-text2 admin-subtitle-centre monitor-config">If you find that the graphs are not in the correct format, please get in contact and we will work with you to ensure this is fixed.</h3>

        <div class="adminSubheader-text2 admin-subtitle-centre">
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
        {/* <div className="admin-video monitor-config"><video width="400" height="230" className="video" frameborder="0" title="TGN" src={tutorial} controls></video>
  </div> */}
        <div className="mobile-config"><ExportMobileConfig /></div>
        <div className="monitor-config"><ExportMonitorConfig /></div>
        <Footer />
      </div>
    </div>
  )

};


export default ExportMain;
