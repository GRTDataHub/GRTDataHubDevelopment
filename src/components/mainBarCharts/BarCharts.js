import React from 'react';
import '../../App.css';

import { ActiveDelegationCountBar, ActiveIndexersCountBar, TotalDelegatedGRT, TotalQueryFees, TotalTokensSignalled, TotalStakedGRT, TotalDelegatedGRTIndexers, TotalBurnedGRT } from "../mainBarCharts/BarChartsData";

class BarCharts extends React.Component {
  render() {
      function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 50;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
  return (
      <div className="container">
        <div className="col-lg-12 ">
        <hr className="hr2 reveal"></hr>
          <h1 className="chartsTitle2 reveal">Bar Charts</h1>

          <div className="photo-wrap chartImg1 reveal">
          <span class="anchor" id="bar1"></span>
          <div className="chartImg" alt="Active Delegation Count"><ActiveDelegationCountBar id="bar1" /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="bar2"></span>
          <div className="chartImg" alt="Active Indexers Count"><ActiveIndexersCountBar id="bar2" /></div>
          </div>

          <div className="photo-wrap chartImg3 reveal">
          <span class="anchor" id="bar3"></span>
          <div className="chartImg" alt="Total Delegated GRT by Delegators"><TotalDelegatedGRT id="bar3" /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="bar4"></span>
          <div className="chartImg" alt="Total Query Fees"><TotalQueryFees id="bar4" /></div>
          </div>

          <div className="photo-wrap chartImg5 reveal">
          <span class="anchor" id="bar5"></span>
          <div className="chartImg" alt="Total GRT Signalled"><TotalTokensSignalled id="bar5" /></div>
          </div>

          <div className="photo-wrap chartImg5 reveal">
          <span class="anchor" id="bar6"></span>
          <div className="chartImg" alt="Total GRT Staked"><TotalStakedGRT id="bar6" /></div>
          </div>

          <div className="photo-wrap chartImg5 reveal">
          <span class="anchor" id="bar7"></span>
          <div className="chartImg" alt="Total Delegated GRT by Indexers"><TotalDelegatedGRTIndexers id="bar7" /></div>
          </div>

          <div className="photo-wrap chartImg6 reveal">
          <span class="anchor" id="bar8"></span>
          <div className="chartImg" alt="Total Burned GRT"><TotalBurnedGRT id="bar8" /></div>
          </div>
        </div>
        
        </div>
  )
}};

export default BarCharts;