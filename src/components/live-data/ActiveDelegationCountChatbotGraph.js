import React from 'react';
import '../../App.css';

import ChatBotActiveDelegationCountBar from "../mainBarCharts/BarChartsData";

class ActiveDelegationCountChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotActiveDelegationCountBar /></div>    
      </div>
      
      

  )
}};

export default ActiveDelegationCountChatbotGraph;