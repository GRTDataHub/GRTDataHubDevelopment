import React from 'react';
import '../../App.css';

import ChatBotTotalGRTDelegatedByDelegatorsBar from "../mainBarCharts/BarChartsData";

class TotalGRTDelegatedByDelegatorsChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotTotalGRTDelegatedByDelegatorsBar /></div>    
      </div>
      
  )
}};

export default TotalGRTDelegatedByDelegatorsChatbotGraph;