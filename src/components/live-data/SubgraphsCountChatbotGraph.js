import React from 'react';
import '../../App.css';

import ChatBotSubgraphsCountBar from "../mainBarCharts/BarChartsData";

class SubgraphsCountChatbotGraph extends React.Component {
  render() {
  return (
      <div className="telegramActiveDelegationCount">
<div><ChatBotSubgraphsCountBar /></div>    
      </div>
      
  )
}};

export default SubgraphsCountChatbotGraph;