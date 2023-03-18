import React, { Component } from "react";
import '../../App.css';
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import LandscapeMobileActiveDelegatorCountBar, { LandscapeMobileHoldersCountBar, LandscapeMobileSubgraphCountBar, LandscapeMobileCuratorCountBar, LandscapeMobileActiveDelegationCountBar, LandscapeMobileActiveIndexersCountBar, LandscapeMobileTotalDelegatedGRT, LandscapeMobileTotalQueryFees, LandscapeMobileTotalTokensSignalled, LandscapeMobileTotalStakedGRT, LandscapeMobileTotalDelegatedGRTIndexers, LandscapeMobileTotalBurnedGRT } from "./LandscapeMobileBarChartsData";

class LandscapeMobileBarChartsCarousel extends Component {
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
        content: <LandscapeMobileActiveDelegatorCountBar id="bar1" />
      }
      ,
      {
        key: uuidv4(),
        content: <LandscapeMobileHoldersCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <LandscapeMobileSubgraphCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <LandscapeMobileCuratorCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <LandscapeMobileActiveDelegationCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <LandscapeMobileActiveIndexersCountBar id="bar2" />
      },
      {
        key: uuidv4(),
        content: <LandscapeMobileTotalDelegatedGRT id="bar3" />
      },
      {
        key: uuidv4(),
        content: <LandscapeMobileTotalQueryFees id="bar4" />
      },
      {
        key: uuidv4(),
        content: <LandscapeMobileTotalTokensSignalled id="bar5" />
      },
      {
        key: uuidv4(),
        content: <LandscapeMobileTotalStakedGRT id="bar6" />
      },
      {
        key: uuidv4(),
        content: <LandscapeMobileTotalDelegatedGRTIndexers id="bar7" />
      },
      {
        key: uuidv4(),
        content: <LandscapeMobileTotalBurnedGRT id="bar8" />
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
  

export default LandscapeMobileBarChartsCarousel;
