import React from 'react';
import '../../App.css';
import MobileBarChartsCarousel from './MobileBarChartsCarousel';
import LandscapeMobileBarChartsCarousel from './LandscapeMobileBarChartsCarousel';
import MobileActiveDelegatorCountBar, { MobileHoldersCountBar, MobileSubgraphCountBar, MobileCuratorCountBar, MobileActiveDelegationCountBar, MobileActiveIndexersCountBar, MobileTotalDelegatedGRT, MobileTotalQueryFees, MobileTotalTokensSignalled, MobileTotalStakedGRT, MobileTotalDelegatedGRTIndexers, MobileTotalBurnedGRT } from "./MobileBarChartsData";

class MobileBarCharts extends React.Component {
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
      <div className="container no-show-monitor">
        <div className="col-lg-12 ">
        <hr className="hr2 reveal"></hr>
          <h1 className="chartsTitle2 reveal">Bar Charts</h1>
<br></br><br></br>
          <div className="photo-wrap chartImg1 mobile-portrait reveal">
          <MobileBarChartsCarousel /></div>
          <div className="photo-wrap chartImg1 mobile-landscape reveal">
          <LandscapeMobileBarChartsCarousel /></div>
          </div>
          
          <br></br><br></br>
        </div>
  )
}};

export default MobileBarCharts;