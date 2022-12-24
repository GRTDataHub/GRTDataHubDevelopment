import React from 'react';
import '../../App.css';

import ChatBotTotalGRTBurnedCountBar from "../mainBarCharts/BarChartsData";

class TotalGRTBurnedCountChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotTotalGRTBurnedCountBar /></div>    
      </div>
      
  )
}};

export default TotalGRTBurnedCountChatbotGraph;