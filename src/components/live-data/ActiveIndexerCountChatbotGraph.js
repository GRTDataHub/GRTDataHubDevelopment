import React from 'react';
import '../../App.css';

import ChatBotActiveIndexerCountBar from "../mainBarCharts/BarChartsData";

class ActiveIndexerCountChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotActiveIndexerCountBar /></div>    
      </div>
      
  )
}};

export default ActiveIndexerCountChatbotGraph;