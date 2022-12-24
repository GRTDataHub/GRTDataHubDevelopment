import React from 'react';
import '../../../App.css';
import AdminActiveDelegatorCountBar, { AdminActiveDelegationCountBar, AdminActiveIndexersCountBar, AdminTotalDelegatedGRT, AdminTotalQueryFees, AdminTotalTokensSignalled, AdminTotalStakedGRT, AdminCuratorCountBar, AdminSubgraphCountBar, AdminHoldersCountBar, AdminTotalDelegatedGRTIndexers, AdminTotalBurnedGRT } from "../exportBarCharts/ExportBarChartsData";
import AdminLineDelegatorCount, { AdminLineIndexerCount, AdminLineStakedIndexersCount, AdminLineSubgraphCount
  // , AdminLineSubgraphDeploymentCount
} from "./ExportLineGraphsData";

class ExportMonitorConfig extends React.Component {
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
        <h1 className="adminHeader-text admin-mobile-center reveal"><u>Monitor Bar Charts</u><br></br><br></br> <strong>To view charts / graphs configured for moble, please view on a smaller screen size.</strong></h1> 
          <div className="photo-wrap chartImg1 reveal">
          <span class="anchor" id="monitorbar1"></span>
          <div alt="AdminActiveDelegatorCountBar" className="adminChart1 chartImg"><AdminActiveDelegatorCountBar /></div>
          </div>
         
          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorbar2"></span>
          <div alt="AdminHoldersCountBar" className="chartImg"><AdminHoldersCountBar /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorbar3"></span>
          <div alt="AdminSubgraphCountBar " className="chartImg"><AdminSubgraphCountBar  /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorbar4"></span>
          <div alt="AdminCuratorCountBar" className="chartImg"><AdminCuratorCountBar  /></div>
          </div>
  
          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorbar5"></span>
          <div className="chartImg" alt="AdminActiveDelegationCountBar "><AdminActiveDelegationCountBar  /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorbar6"></span>
          <div className="chartImg" alt="AdminActiveIndexersCountBar"><AdminActiveIndexersCountBar /></div>
          </div>

          <div className="photo-wrap chartImg3 reveal">
          <span class="anchor" id="monitorbar7"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTDelegator"><AdminTotalDelegatedGRT  /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar8"></span>
          <div className="chartImg" alt="AdminTotalQueryFees"><AdminTotalQueryFees  /></div>
          </div>

          <div className="photo-wrap chartImg5 reveal">
          <span class="anchor" id="monitorbar9"></span>
          <div className="chartImg" alt="AdminTotalTokensSignalled"><AdminTotalTokensSignalled /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar10"></span>
          <div className="chartImg" alt="AdminTotalStakedGRT"><AdminTotalStakedGRT /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><AdminTotalDelegatedGRTIndexers /></div>
          </div>
          
          <div className="photo-wrap chartImg5 reveal">
          <span class="anchor" id="monitorbar12"></span>
          <div className="chartImg" alt="AdminTotalBurnedGRT"><AdminTotalBurnedGRT /></div>
          </div>

          <h1 className="adminHeader-text admin-mobile-center-line reveal"><u>Monitor Line Graphs</u><br></br><br></br> Please see top of page for export instructions and video tutorial.</h1> 

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorline1"></span>
          <div className="chartImg" alt="AdminLineDelegatorCount"><AdminLineDelegatorCount /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorline2"></span>
          <div className="chartImg" alt="AdminLineIndexerCount"><AdminLineIndexerCount /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorline3"></span>
          <div className="chartImg" alt="AdminLineStakedIndexersCount"><AdminLineStakedIndexersCount/></div>
          </div>
          
          <div className="photo-wrap chartImg6 reveal">
          <span class="anchor" id="monitorline4"></span>
          <div className="chartImg" alt="AdminLineSubgraphCount"><AdminLineSubgraphCount /></div>
          </div>

          {/* <div className="photo-wrap chartImg6 reveal">
          <span class="anchor" id="monitorline5"></span>
          <div className="chartImg" alt="AdminLineSubgraphDeploymentCount"><AdminLineSubgraphDeploymentCount /></div>
          </div> */}
        </div>
        </div>
  )
}};

export default ExportMonitorConfig;