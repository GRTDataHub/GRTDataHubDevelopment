import React from 'react';
import '../../App.css';

import ChatBotTotalGRTSignalledByCuratorsBar from "../mainBarCharts/BarChartsData";

class TotalGRTSignalledByCuratorsChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotTotalGRTSignalledByCuratorsBar /></div>    
      </div>
      
  )
}};

export default TotalGRTSignalledByCuratorsChatbotGraph;