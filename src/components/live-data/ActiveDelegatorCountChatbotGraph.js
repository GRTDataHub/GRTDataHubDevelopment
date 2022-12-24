import React from 'react';
import '../../App.css';

import ChatBotActiveDelegatorCountBar from "../mainBarCharts/BarChartsData";

class ActiveDelegatorCountChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotActiveDelegatorCountBar /></div>    
      </div>
      
  )
}};

export default ActiveDelegatorCountChatbotGraph;