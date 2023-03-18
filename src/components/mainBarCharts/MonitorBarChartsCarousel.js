import React, { Component } from "react";
import '../../App.css';
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import MonitorActiveDelegatorCountBar, { MonitorHoldersCountBar, MonitorSubgraphCountBar, MonitorCuratorCountBar, MonitorActiveDelegationCountBar, MonitorActiveIndexersCountBar, MonitorTotalDelegatedGRT, MonitorTotalQueryFees, MonitorTotalTokensSignalled, MonitorTotalStakedGRT, MonitorTotalDelegatedGRTIndexers, MonitorTotalBurnedGRT } from "./MonitorBarChartsData";

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
        content: <MonitorActiveDelegatorCountBar id="bar1" />
      }
      ,
      {
        key: uuidv4(),
        content: <MonitorHoldersCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <MonitorSubgraphCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <MonitorCuratorCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <MonitorActiveDelegationCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <MonitorActiveIndexersCountBar id="bar2" />
      },
      {
        key: uuidv4(),
        content: <MonitorTotalDelegatedGRT id="bar3" />
      },
      {
        key: uuidv4(),
        content: <MonitorTotalQueryFees id="bar4" />
      },
      {
        key: uuidv4(),
        content: <MonitorTotalTokensSignalled id="bar5" />
      },
      {
        key: uuidv4(),
        content: <MonitorTotalStakedGRT id="bar6" />
      },
      {
        key: uuidv4(),
        content: <MonitorTotalDelegatedGRTIndexers id="bar7" />
      },
      {
        key: uuidv4(),
        content: <MonitorTotalBurnedGRT id="bar8" />
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
