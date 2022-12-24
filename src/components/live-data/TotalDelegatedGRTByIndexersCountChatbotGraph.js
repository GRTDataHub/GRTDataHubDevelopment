import React from 'react';
import '../../App.css';

import ChatBotTotalDelegatedGRTByIndexersCountBar from "../mainBarCharts/BarChartsData";

class TotalDelegatedGRTByIndexersCountChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotTotalDelegatedGRTByIndexersCountBar /></div>    
      </div>
      
  )
}};

export default TotalDelegatedGRTByIndexersCountChatbotGraph;