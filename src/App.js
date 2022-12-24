import React, { Component }  from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import GRTDataHubLogoLoader from "./GRTDataHubLogoLoader.png";
import Navbar from "./components/navbars/Navbar";
import Main from "./components/mainBarCharts/Main";
import ScrollButton from "./components/scrollButton/ScrollButton";
import ExportPage from './components/exportPage/ExportPage';
import ESPQuestionBank from './components/chatBot/ESPQuestionBank';
import GERQuestionBank from './components/chatBot/GERQuestionBank';
import FRAQuestionBank from './components/chatBot/FRAQuestionBank';
import QuestionBank from './components/chatBot/ENGQuestionBank';
import PrivacyPolicy from './components/privacyPolicy/privacyPolicy';
import CookiesPolicy from './components/cookiesPolicy/cookiesPolicy';
import AboutPage from './components/aboutPage/AboutPage';
import IndexerMain from './components/indexer/IndexerMain';
import DelegatorMain from './components/delegator/DelegatorMain';
import CuratorMain from './components/curator/CuratorMain';
import ESPChatBotPage from './components/chatBot/ESPChatBotPage';
import GERChatBotPage from './components/chatBot/GERChatBotPage';
import ENGChatBotPage from './components/chatBot/ENGChatBotPage';
import FRAChatBotPage from './components/chatBot/FRAChatBotPage';
import ChatBotPage from './components/chatBot/ChatBotPage';
import ActiveDelegationCount from './components/live-data/ActiveDelegationCount';
import ActiveDelegationCountChatbotGraph from './components/live-data/ActiveDelegationCountChatbotGraph';
import ActiveDelegatorCount from './components/live-data/ActiveDelegatorCount';
import ActiveDelegatorCountChatbotGraph from './components/live-data/ActiveDelegatorCountChatbotGraph';
import HoldersCount from './components/live-data/HoldersCount';
import HoldersCountChatbotGraph from './components/live-data/HoldersCountChatbotGraph';
import SubgraphsCount from './components/live-data/SubgraphsCount';
import SubgraphsCountChatbotGraph from './components/live-data/SubgraphsCountChatbotGraph';
import CuratorsCount from './components/live-data/CuratorsCount';
import CuratorsCountChatbotGraph from './components/live-data/CuratorsCountChatbotGraph';
import ActiveIndexerCount from './components/live-data/ActiveIndexerCount';
import ActiveIndexerCountChatbotGraph from './components/live-data/ActiveIndexerCountChatbotGraph';
import TotalGRTDelegatedByDelegators from './components/live-data/TotalGRTDelegatedByDelegators';
import TotalGRTDelegatedByDelegatorsChatbotGraph from './components/live-data/TotalGRTDelegatedByDelegatorsChatbotGraph';
import TotalQueryFeesCount from './components/live-data/TotalQueryFeesCount';
import TotalQueryFeesCountChatbotGraph from './components/live-data/TotalQueryFeesCountChatbotGraph';
import TotalGRTSignalledByCurators from './components/live-data/TotalGRTSignalledByCurators';
import TotalGRTSignalledByCuratorsChatbotGraph from './components/live-data/TotalGRTSignalledByCuratorsChatbotGraph';
import TotalStakedGRTCount from './components/live-data/TotalStakedGRTCount';
import TotalStakedGRTCountChatbotGraph from './components/live-data/TotalStakedGRTCountChatbotGraph';
import TotalDelegatedGRTByIndexersCount from './components/live-data/TotalDelegatedGRTByIndexersCount';
import TotalDelegatedGRTByIndexersCountChatbotGraph from './components/live-data/TotalDelegatedGRTByIndexersCountChatbotGraph';
import TotalGRTBurnedCount from './components/live-data/TotalGRTBurnedCount';
import TotalGRTBurnedCountChatbotGraph from './components/live-data/TotalGRTBurnedCountChatbotGraph';
import BinanceStakingGER from './components/chatBot/BinanceStakingGER';
import IPhoneGER from './components/chatBot/IPhoneGER';
import GraphRoadmapGER from './components/chatBot/GraphRoadmapGER';
import GraphAdvocatesSpotlight from './components/graphAdvocatesSpotlight/graphAdvocatesSpotlight';
import ReduceGasESP from './components/chatBot/ReduceGasESP';

const Home = () => ({
  render() {
      return (
        <>
          <Navbar />
          <Main />
	  <ScrollButton />
       </>
    );
  }}
);

class App extends Component{
  state = {
    loading: true
  };
  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
    render(){
      const { loading } = this.state;
    
      if(loading) { 
        return <div>
          <div id="app" className="loader"></div>
                  <div><img className="loaderLogo" src={GRTDataHubLogoLoader}  alt="GRTDataHub Loader Logo"></img></div>
                  <div className="loadingTitle"><p>GRTDataHub</p></div>
        </div>;
      }

      
        return(
          <Router>
          <Routes>
          <Route path="/"
                  element={<Home />} />
              <Route path="/exportPage"
                  element={<ExportPage />} />
                  <Route path="/privacyPolicy"
                  element={<PrivacyPolicy />} />
                  <Route path="/cookiePolicy"
                  element={<CookiesPolicy />} />
                  <Route path="/aboutPage"
                  element={<AboutPage />} />
                  <Route path="/indexers"
                  element={<IndexerMain />} />
                   <Route path="/delegators"
                  element={<DelegatorMain />} />
                   <Route path="/curators"
                  element={<CuratorMain />} />
                  <Route path="/ActiveDelegationCount"
                  element={<ActiveDelegationCount />} />
                   <Route path="/ActiveDelegationCountChatbotGraph"
                  element={<ActiveDelegationCountChatbotGraph />} />
                  <Route path="/ActiveDelegatorCount"
                  element={<ActiveDelegatorCount />} />
                   <Route path="/ActiveDelegatorCountChatbotGraph"
                  element={<ActiveDelegatorCountChatbotGraph />} />
                   <Route path="/HoldersCount"
                  element={<HoldersCount />} />
                   <Route path="/HoldersCountChatbotGraph"
                  element={<HoldersCountChatbotGraph />} />
                   <Route path="/SubgraphsCount"
                  element={<SubgraphsCount />} />
                   <Route path="/SubgraphsCountChatbotGraph"
                  element={<SubgraphsCountChatbotGraph />} />
                  <Route path="/CuratorsCount"
                  element={<CuratorsCount />} />
                   <Route path="/CuratorsCountChatbotGraph"
                  element={<CuratorsCountChatbotGraph />} />
                  <Route path="/ActiveIndexerCount"
                  element={<ActiveIndexerCount />} />
                   <Route path="/ActiveIndexerCountChatbotGraph"
                  element={<ActiveIndexerCountChatbotGraph />} />
                  <Route path="/TotalGRTDelegatedByDelegators"
                  element={<TotalGRTDelegatedByDelegators />} />
                   <Route path="/TotalGRTDelegatedByDelegatorsChatbotGraph"
                  element={<TotalGRTDelegatedByDelegatorsChatbotGraph />} />
                  <Route path="/TotalQueryFeesCount"
                  element={<TotalQueryFeesCount />} />
                   <Route path="/TotalQueryFeesCountChatbotGraph"
                  element={<TotalQueryFeesCountChatbotGraph />} />
                   <Route path="/TotalGRTSignalledByCurators"
                  element={<TotalGRTSignalledByCurators />} />
                   <Route path="/TotalGRTSignalledByCuratorsChatbotGraph"
                  element={<TotalGRTSignalledByCuratorsChatbotGraph />} />
                   <Route path="/TotalStakedGRTCount"
                  element={<TotalStakedGRTCount />} />
                   <Route path="/TotalStakedGRTCountChatbotGraph"
                  element={<TotalStakedGRTCountChatbotGraph />} />
                   <Route path="/TotalDelegatedGRTByIndexersCountChatbotGraph"
                  element={<TotalDelegatedGRTByIndexersCountChatbotGraph />} />
                    <Route path="/TotalDelegatedGRTByIndexersCount"
                  element={<TotalDelegatedGRTByIndexersCount />} />
                    <Route path="/TotalGRTBurnedCountChatbotGraph"
                  element={<TotalGRTBurnedCountChatbotGraph />} />
                    <Route path="/TotalGRTBurnedCount"
                  element={<TotalGRTBurnedCount />} />
                  <Route path="/QuestionBank"
                  element={<QuestionBank />} />
                  <Route path="/chatBot"
                  element={<ChatBotPage />} />
                  <Route path="/ENGchatBot"
                  element={<ENGChatBotPage />} />
                  <Route path="/GERchatBot"
                  element={<GERChatBotPage />} />
                  <Route path="/GERQuestionBank"
                  element={<GERQuestionBank />} />
                  <Route path="/ESPchatBot"
                  element={<ESPChatBotPage />} />
                  <Route path="/ESPQuestionBank"
                  element={<ESPQuestionBank />} />
                   <Route path="/FRAchatBot"
                  element={<FRAChatBotPage />} />
                  <Route path="/FRAQuestionBank"
                  element={<FRAQuestionBank />} />
                  <Route path="/Binance_Staking_GER"
                  element={<BinanceStakingGER/>} />
                    <Route path="/IPhone_GER"
                  element={<IPhoneGER/>} />
                  <Route path="/Graph_Roadmap_GER"
                  element={<GraphRoadmapGER/>} />
                  <Route path="/GraphAdvocatesSpotlight"
                  element={<GraphAdvocatesSpotlight/>} />
                   <Route path="/ReduceGasESP"
                  element={<ReduceGasESP/>} />
          </Routes>
      </Router>
        ) 
     }
} 

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

export default App;





