import React from 'react';
import '../../App.css';

import ChatBotTotalQueryFeesCountBar from "../mainBarCharts/BarChartsData";

class TotalQueryFeesCountChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotTotalQueryFeesCountBar /></div>    
      </div>
      
  )
}};

export default TotalQueryFeesCountChatbotGraph;