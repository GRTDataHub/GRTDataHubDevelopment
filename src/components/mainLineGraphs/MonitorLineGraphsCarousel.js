import React, { Component } from "react";
import '../../App.css';
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import MonitorLineDelegatorCount, { MonitorLineIndexerCount, MonitorLineStakedIndexersCount, MonitorLineSubgraphCount } from "./MonitorLineGraphsData";

class MonitorLineGraphsCarousel extends Component {
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
        content: <MonitorLineDelegatorCount />
      }
      ,
      {
        key: uuidv4(),
        content: <MonitorLineIndexerCount />
      },
      {
        key: uuidv4(),
        content: <MonitorLineStakedIndexersCount/>
      },
      {
        key: uuidv4(),
        content: <MonitorLineSubgraphCount />
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
        <div class="monitor-line-carousel">
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
  

export default MonitorLineGraphsCarousel;