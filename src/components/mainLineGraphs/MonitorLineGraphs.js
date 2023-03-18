import React from 'react';
import '../../App.css';
import MonitorLineGraphsCarousel from './MonitorLineGraphsCarousel';
import MonitorOtherCharts from '../mainBarCharts/MonitorOtherCharts';

class MonitorLineGraphs extends React.Component {
  
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
      <div className="container monitor-config">
        <div className="col-lg-12 ">
          <hr className="hr reveal"></hr>
          <h1 className="chartsTitle reveal">Line Graphs</h1>
          <br></br><br></br>
          <div className="photo-wrap chartImg1 reveal">
          <MonitorLineGraphsCarousel /></div>
          <br></br>
          <hr className="hr reveal"></hr>
          <h1 className="chartsTitle reveal">More Data</h1>
          <br></br><br></br>
          <div className="photo-wrap chartImg1 monitor-other-charts-position reveal"><MonitorOtherCharts /></div>
          <br></br><br></br>
          </div>
        </div>
        
  )
}};

export default MonitorLineGraphs;