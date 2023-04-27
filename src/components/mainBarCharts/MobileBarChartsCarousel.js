import React, { Component } from "react";
import '../../App.css';
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

import NewMobileCuratorBarChartsData from "../helpers/mobileBarCharts/NewMobileCuratorBarChartsData";
import NewMobileDelegatorBarChartsData from "../helpers/mobileBarCharts/NewMobileDelegatorBarChartsData";
import NewMobileIndexerBarChartsData from "../helpers/mobileBarCharts/NewMobileIndexerBarChartsData";
import NewMobileStakedIndexerBarChartsData from "../helpers/mobileBarCharts/NewMobileStakedIndexerBarChartsData";
import NewMobileSubgraphBarChartsData from "../helpers/mobileBarCharts/NewMobileSubgraphBarChartsData";
import NewMobileSubgraphDeployedBarChartsData from "../helpers/mobileBarCharts/NewMobileSubgraphDeployedBarChartsData";
import NewMobileTotalCuratorQueryFeesBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalCuratorQueryFeesBarChartsData";
import NewMobileTotalDelegatedTokensBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalDelegatedTokensBarChartsData";
import NewMobileTotalDelegatorQueryFeeRebatesBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalDelegatorQueryFeeRebatesBarChartsData";
import NewMobileTotalIndexerQueryFeeRebatesBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalIndexerQueryFeeRebatesBarChartsData";
import NewMobileTotalIndexerQueryFeesCollectedBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalIndexerQueryFeesCollectedBarChartsData";
import NewMobileTotalIndexingDelegatorRewardsBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalIndexingDelegatorRewardsBarChartsData";
import NewMobileTotalIndexingIndexerRewardsBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalIndexingIndexerRewardsBarChartsData";
import NewMobileTotalIndexingRewardsBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalIndexingRewardsBarChartsData";
import NewMobileTotalQueryFeesBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalQueryFeesBarChartsData";
import NewMobileTotalTaxedQueryFeesBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalTaxedQueryFeesBarChartsData";
import NewMobileTotalTokensAllocatedBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalTokensAllocatedBarChartsData";
import NewMobileTotalTokensSignalledBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalTokensSignalledBarChartsData";
import NewMobileTotalTokensStakedBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalTokensStakedBarChartsData";
import NewMobileTotalUnclaimedQueryFeeRebatesBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalUnclaimedQueryFeeRebatesBarChartsData";
import NewMobileTotalUnstakedTokensLockedBarChartsData from "../helpers/mobileBarCharts/NewMobileTotalUnstakedTokensLockedBarChartsData";

class MobileBarChartsCarousel extends Component {
    state = {
      goToSlide: 0,
      offsetRadius: 3,
      showNavigation: true,
      config: config.gentle
    };
  
    // <div className="photo-wrap chartImg1 reveal">
    //       <span class="anchor" id="bar1"></span>
    //       </div>

    slides = [
      {
        key: uuidv4(),
        content: <NewMobileCuratorBarChartsData id="bar1" />
      }
      ,
      {
        key: uuidv4(),
        content: <NewMobileDelegatorBarChartsData id="bar1" />
      },
      {
        key: uuidv4(),
        content: <NewMobileIndexerBarChartsData id="bar1" />
      },
      {
        key: uuidv4(),
        content: <NewMobileStakedIndexerBarChartsData id="bar1" />
      },
      {
        key: uuidv4(),
        content: <NewMobileSubgraphBarChartsData id="bar1" />
      },
      {
        key: uuidv4(),
        content: <NewMobileSubgraphDeployedBarChartsData id="bar2" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalCuratorQueryFeesBarChartsData id="bar3" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalDelegatedTokensBarChartsData id="bar4" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalDelegatorQueryFeeRebatesBarChartsData id="bar5" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalIndexerQueryFeeRebatesBarChartsData id="bar6" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalIndexerQueryFeesCollectedBarChartsData id="bar7" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalIndexingDelegatorRewardsBarChartsData id="bar8" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalIndexingIndexerRewardsBarChartsData id="bar8" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalIndexingRewardsBarChartsData id="bar8" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalQueryFeesBarChartsData id="bar8" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalTaxedQueryFeesBarChartsData id="bar8" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalTokensAllocatedBarChartsData id="bar8" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalTokensSignalledBarChartsData id="bar8" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalTokensStakedBarChartsData id="bar8" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalUnclaimedQueryFeeRebatesBarChartsData id="bar8" />
      },
      {
        key: uuidv4(),
        content: <NewMobileTotalUnstakedTokensLockedBarChartsData id="bar8" />
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
        <div class="mobile-bar-carousel">
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
  

export default MobileBarChartsCarousel;
