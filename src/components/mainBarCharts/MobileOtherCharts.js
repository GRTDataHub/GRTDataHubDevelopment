import React, { Component } from "react";
import '../../App.css';
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

class MobileOtherCharts extends Component {
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
        content:  <iframe className="map GRTDailyTransactions reveal" title="GRT Daily Transactions" src="https://dune.com/embeds/681010/1272035/a35e61c1-5db1-4630-ac36-e8b4416c3e87" width="600" height="250"  frameborder="0"></iframe>
      }
      ,
      {
        key: uuidv4(),
        content: <iframe className="map GRTDailyTransactions reveal" title="GRT Bought Hourly" src="https://dune.com/embeds/680926/1272068/e31f19d3-6354-4a8f-9150-20fc4163192c" width="600" height="250"  frameborder="0"></iframe>
      },
      {
        key: uuidv4(),
        content:  <iframe className="map GRTDailyTransactions reveal" title="Total Transfer of GRT Token In Ethereum" src="https://dune.com/embeds/2052357/3395251" width="600" height="250"  frameborder="0"></iframe>
      },
      {
        key: uuidv4(),
        content: <iframe className="map GRTDailyTransactions reveal" title="The Graph - Cumulative Query Fees" src="https://dune.com/embeds/2052360/3395258" width="600" height="250"  frameborder="0"></iframe>
      },
      {
        key: uuidv4(),
        content: <iframe className="map GRTDailyTransactions reveal" title="The Graph - Cumulative Tokens Burned" src="https://dune.com/embeds/2052367/3395270" width="600" height="250"  frameborder="0"></iframe>
      },
      {
        key: uuidv4(),
        content: <iframe className="map GRTDailyTransactions reveal" title="The Graph - Staking Token Flow" src="https://dune.com/embeds/2052369/3395273" width="600" height="250"  frameborder="0"></iframe>
      },
      {
        key: uuidv4(),
        content: <iframe className="map GRTDailyTransactions reveal" title="The Graph - Delegators Histogram" src="https://dune.com/embeds/2052371/3395275" width="600" height="250"  frameborder="0"></iframe>
      },
      {
        key: uuidv4(),
        content: <iframe className="map GRTDailyTransactions reveal" title="Top 100 GRT Token Holders" src="https://dune.com/embeds/685752/3395308" width="600" height="250"  frameborder="0"></iframe>
      },
      {
        key: uuidv4(),
        content: <iframe className="map GRTDailyTransactions reveal" title="GRT Total Supply" src="https://dune.com/embeds/2053031/3396362" width="600" height="250"  frameborder="0"></iframe>
      },
      {
        key: uuidv4(),
        content: <iframe className="map GRTDailyTransactions reveal" title="The Graph - Distinct Wallet Addresses" src="https://dune.com/embeds/2053044/3396396" width="600" height="250" frameborder="0"></iframe>
      },
      {
        key: uuidv4(),
        content: <iframe className="map GRTDailyTransactions reveal" title="The Graph - Top 20 Holders " src="https://dune.com/embeds/2053047/3396405" width="600" height="250"  frameborder="0"></iframe>
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
        <div class="mobile-other-carousel">
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
  

export default MobileOtherCharts;
