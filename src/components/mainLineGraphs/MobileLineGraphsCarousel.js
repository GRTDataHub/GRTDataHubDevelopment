import React, { Component } from "react";
import '../../App.css';
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import MobileLineDelegatorCount, { MobileLineIndexerCount, MobileLineStakedIndexersCount, MobileLineSubgraphCount } from "./MobileLineGraphsData";

class MobileLineGraphsCarousel extends Component {
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
        content: <MobileLineDelegatorCount />
      }
      ,
      {
        key: uuidv4(),
        content: <MobileLineIndexerCount />
      },
      {
        key: uuidv4(),
        content: <MobileLineStakedIndexersCount/>
      },
      {
        key: uuidv4(),
        content: <MobileLineSubgraphCount />
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
        <div class="mobile-line-carousel">
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
  

export default MobileLineGraphsCarousel;