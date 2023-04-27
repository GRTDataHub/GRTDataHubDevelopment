import React, { Component } from "react";
import '../../App.css';
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

import NewMonitorDelegatorBarChartsData from '../helpers/monitorBarCharts/NewMonitorDelegatorBarChartsData';
import NewMonitorCuratorBarChartsData from '../helpers/monitorBarCharts/NewMonitorCuratorBarChartsData';
import NewMonitorIndexersBarChartsData from '../helpers/monitorBarCharts/NewMonitorIndexerBarChartsData';
import NewMonitorStakedIndexerBarChartsData from '../helpers/monitorBarCharts/NewMonitorStakedIndexerBarChartsData';
import NewMonitorSubgraphBarChartsData from '../helpers/monitorBarCharts/NewMonitorSubgraphBarChartsData';
import NewMonitorSubgraphDeployedBarChartsData from '../helpers/monitorBarCharts/NewMonitorSubgraphDeployedBarChartsData';
import NewTotalCuratorQueryFeesBarChartsData from '../helpers/monitorBarCharts/NewTotalCuratorQueryFeesBarChartsData';
import NewTotalDelegatedTokensBarChartsData from '../helpers/monitorBarCharts/NewTotalDelegatedTokensBarChartsData';
import NewTotalQueryFeesBarChartsData from '../helpers/monitorBarCharts/NewTotalQueryFeesBarChartsData';
import NewTotalTokensAllocatedBarChartsData from '../helpers/monitorBarCharts/NewTotalTokensAllocatedBarChartsData';
import NewTotalTokensStakedBarChartsData from '../helpers/monitorBarCharts/NewTotalTokensStakedBarChartsData';
import NewTotalTokensSignalledBarChartsData from '../helpers/monitorBarCharts/NewTotalTokensSignalledBarChartsData';
import NewTotalTaxedQueryFeesBarChartsData from '../helpers/monitorBarCharts/NewTotalTaxedQueryFeesBarChartsData';
import NewTotalIndexerQueryFeesCollectedBarChartsData from '../helpers/monitorBarCharts/NewTotalIndexerQueryFeesCollectedBarChartsData';
import NewTotalIndexingIndexerRewardsBarChartsData from '../helpers/monitorBarCharts/NewTotalIndexingIndexerRewardsBarChartsData';
import NewTotalIndexerQueryFeeRebatesBarChartsData from '../helpers/monitorBarCharts/NewTotalIndexingIndexerRewardsBarChartsData';
import NewTotalIndexingRewardsBarChartsData from '../helpers/monitorBarCharts/NewTotalIndexingRewardsBarChartsData';
import NewTotalDelegatorQueryFeeRebatesBarChartsData from '../helpers/monitorBarCharts/NewTotalDelegatorQueryFeeRebatesBarChartsData';
import NewTotalIndexingDelegatorRewardsBarChartsData from '../helpers/monitorBarCharts/NewTotalIndexingDelegatorRewardsBarChartsData';
import NewTotalUnclaimedQueryFeeRebatesBarChartsData from '../helpers/monitorBarCharts/NewTotalUnclaimedQueryFeeRebatesBarChartsData';
import NewTotalUnstakedTokensLockedBarChartsData from '../helpers/monitorBarCharts/NewTotalUnstakedTokensLockedBarChartsData';

class MonitorBarChartsCarousel extends Component {
    state = {
      goToSlide: 0,
      offsetRadius: 3,
      showNavigation: false,
      config: config.gentle
    };
  
    // <div className="photo-wrap chartImg1 reveal">
    //       <span class="anchor" id="bar1"></span>
    //       </div>

    slides = [
      {
        key: uuidv4(),
        content: <NewMonitorDelegatorBarChartsData id="bar1" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewMonitorCuratorBarChartsData id="bar1" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewMonitorIndexersBarChartsData id="bar1" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewMonitorStakedIndexerBarChartsData id="bar1" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewMonitorSubgraphBarChartsData id="bar1" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewMonitorSubgraphDeployedBarChartsData id="bar1" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewTotalCuratorQueryFeesBarChartsData id="bar2" />
      },
      {
        key: uuidv4(),
        content: <NewTotalDelegatedTokensBarChartsData id="bar3" />
      },
      {
        key: uuidv4(),
        content: <NewTotalQueryFeesBarChartsData id="bar4" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewTotalTokensAllocatedBarChartsData id="bar5" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewTotalTokensStakedBarChartsData id="bar6" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewTotalTokensSignalledBarChartsData id="bar7" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewTotalTaxedQueryFeesBarChartsData id="bar8" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewTotalIndexerQueryFeesCollectedBarChartsData id="bar8" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewTotalIndexingIndexerRewardsBarChartsData id="bar8" />
      }
       ,
      {
        key: uuidv4(),
        content: <NewTotalIndexerQueryFeeRebatesBarChartsData id="bar8" />
      }
        ,
      {
        key: uuidv4(),
        content: <NewTotalIndexingRewardsBarChartsData id="bar8" />
      }
          ,
      {
        key: uuidv4(),
        content: <NewTotalDelegatorQueryFeeRebatesBarChartsData id="bar8" />
      }
           ,
      {
        key: uuidv4(),
        content: <NewTotalIndexingDelegatorRewardsBarChartsData id="bar8" />
      }
         ,
      {
        key: uuidv4(),
        content: <NewTotalUnclaimedQueryFeeRebatesBarChartsData id="bar8" />
      }
        ,
      {
        key: uuidv4(),
        content: <NewTotalUnstakedTokensLockedBarChartsData id="bar8" />
      }
    ].map((slide, index) => {
      return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });
  
    onChangeInput = e => {
      this.setState({
        [e.target.name]: parseInt(e.target.value, 10) || 0
      });
    };
  
    render() {
      return (
        <div class="monitor-bar-carousel">
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
          <div
            style={{
              margin: "0 auto",
              marginTop: "2rem",
              width: "50%",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
          </div>
        </div>
      );
    }
  }
  

export default MonitorBarChartsCarousel;
