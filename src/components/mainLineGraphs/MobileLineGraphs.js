import React from 'react';
import '../../App.css';
import MobileLineGraphsCarousel from './MobileLineGraphsCarousel';
import LandscapeMobileLineGraphsCarousel from './LandscapeMobileLineGraphsCarousel';
import MobileOtherCharts from '../mainBarCharts/MobileOtherCharts';
import LandscapeMobileOtherCharts from '../mainBarCharts/LandscapeMobileOtherCharts';
class MobileLineGraphs extends React.Component {
  
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
          <hr className="hr reveal"></hr>
          <h1 className="chartsTitle reveal">Line Graphs</h1>
          <br></br><br></br>
          <div className="photo-wrap chartImg1 mobile-line-pos mobile-portrait reveal">
          <MobileLineGraphsCarousel /></div>
          <div className="photo-wrap chartImg1 mobile-line-pos mobile-landscape reveal">
          <LandscapeMobileLineGraphsCarousel /></div>
          <br></br>
          <hr className="hr more-data-hr reveal"></hr>
          <h1 className="chartsTitle more-data-title reveal">More Data</h1>
          <br></br><br></br>
          <div className="photo-wrap chartImg1 mobile-other-charts-position mobile-portrait reveal"><MobileOtherCharts/></div>
          <div className="photo-wrap chartImg1 mobile-other-charts-position mobile-landscape reveal"><LandscapeMobileOtherCharts/></div>
          </div>
        </div>
        
  )
}};

export default MobileLineGraphs;