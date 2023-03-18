import React, { Component } from "react";
import '../../App.css';
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import MobileActiveDelegatorCountBar, { MobileHoldersCountBar, MobileSubgraphCountBar, MobileCuratorCountBar, MobileActiveDelegationCountBar, MobileActiveIndexersCountBar, MobileTotalDelegatedGRT, MobileTotalQueryFees, MobileTotalTokensSignalled, MobileTotalStakedGRT, MobileTotalDelegatedGRTIndexers, MobileTotalBurnedGRT } from "./MobileBarChartsData";

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
        content: <MobileActiveDelegatorCountBar id="bar1" />
      }
      ,
      {
        key: uuidv4(),
        content: <MobileHoldersCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <MobileSubgraphCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <MobileCuratorCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <MobileActiveDelegationCountBar id="bar1" />
      },
      {
        key: uuidv4(),
        content: <MobileActiveIndexersCountBar id="bar2" />
      },
      {
        key: uuidv4(),
        content: <MobileTotalDelegatedGRT id="bar3" />
      },
      {
        key: uuidv4(),
        content: <MobileTotalQueryFees id="bar4" />
      },
      {
        key: uuidv4(),
        content: <MobileTotalTokensSignalled id="bar5" />
      },
      {
        key: uuidv4(),
        content: <MobileTotalStakedGRT id="bar6" />
      },
      {
        key: uuidv4(),
        content: <MobileTotalDelegatedGRTIndexers id="bar7" />
      },
      {
        key: uuidv4(),
        content: <MobileTotalBurnedGRT id="bar8" />
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
