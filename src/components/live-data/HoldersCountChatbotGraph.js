import React from 'react';
import '../../App.css';

import ChatBotHoldersCountBar from "../mainBarCharts/BarChartsData";

class HoldersCountChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotHoldersCountBar /></div>    
      </div>
      
      

  )
}};

export default HoldersCountChatbotGraph;