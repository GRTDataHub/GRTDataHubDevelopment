import React from 'react';
import '../../App.css';

import ChatBotCuratorsCountBar from "../mainBarCharts/BarChartsData";

class CuratorsCountChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotCuratorsCountBar /></div>    
      </div>
      
  )
}};

export default CuratorsCountChatbotGraph;