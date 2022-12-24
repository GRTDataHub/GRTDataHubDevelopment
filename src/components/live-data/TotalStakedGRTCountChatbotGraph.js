import React from 'react';
import '../../App.css';

import ChatBotTotalStakedGRTCountBar from "../mainBarCharts/BarChartsData";

class TotalStakedGRTCountChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotTotalStakedGRTCountBar /></div>    
      </div>
      
  )
}};

export default TotalStakedGRTCountChatbotGraph;