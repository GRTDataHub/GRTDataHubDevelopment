import React from 'react';
import '../../../App.css';

import { MobileAdminActiveDelegatorCountBar, MobileAdminActiveDelegationCountBar, MobileAdminActiveIndexersCountBar, MobileAdminTotalDelegatedGRT, MobileAdminTotalQueryFees, MobileAdminTotalTokensSignalled, MobileAdminTotalStakedGRT, MobileAdminCuratorCountBar, MobileAdminSubgraphCountBar, MobileAdminHoldersCountBar, MobileAdminTotalDelegatedGRTIndexers, MobileAdminTotalBurnedGRT } from "./ExportBarChartsData";

import { MobileAdminLineDelegatorCount, MobileAdminLineIndexerCount, MobileAdminLineStakedIndexersCount, MobileAdminLineSubgraphCount
  // , MobileAdminLineSubgraphDeploymentCount
} from "../exportLineGraphs/ExportLineGraphsData";

class ExportMobileConfig extends React.Component {
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
        <div className="col-lg-12">
          <h1 className="adminHeader-text admin-mobile-center reveal ten"><u>Mobile Bar Charts</u><br></br><br></br><strong>To view charts configured for monitor, please view on a larger screen size.</strong></h1> 
  {/* MOBILE */}
  <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="mobilebar1"></span>
          <div alt="MobileAdminActiveDelegatorCountBar" className="chartImg"><MobileAdminActiveDelegatorCountBar /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="mobilebar2"></span>
          <div alt="MobileAdminHoldersCountBar" className="chartImg"><MobileAdminHoldersCountBar /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="mobilebar3"></span>
          <div alt="MobileAdminSubgraphCountBar" className="chartImg"><MobileAdminSubgraphCountBar /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="mobilebar4"></span>
          <div alt="MobileAdminCuratorCountBar" className="chartImg"><MobileAdminCuratorCountBar /></div>
          </div>
  
          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="mobilebar5"></span>
          <div className="chartImg" alt="MobileAdminActiveDelegationCountBar"><MobileAdminActiveDelegationCountBar /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="mobilebar6"></span>
          <div className="chartImg" alt="MobileAdminActiveIndexersCountBar"><MobileAdminActiveIndexersCountBar /></div>
          </div>

          <div className="photo-wrap chartImg3 reveal">
          <span class="anchor" id="mobilebar7"></span>
          <div className="chartImg" alt="MobileAdminTotalDelegatedGRTDelegators"><MobileAdminTotalDelegatedGRT /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="mobilebar8"></span>
          <div className="chartImg" alt="MobileAdminTotalQueryFees"><MobileAdminTotalQueryFees /></div>
          </div>

          <div className="photo-wrap chartImg5 reveal">
          <span class="anchor" id="mobilebar9"></span>
          <div className="chartImg" alt="MobileAdminTotalTokensSignalled"><MobileAdminTotalTokensSignalled /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="mobilebar10"></span>
          <div className="chartImg" alt="MobileAdminTotalStakedGRT"><MobileAdminTotalStakedGRT /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="mobilebar11"></span>
          <div className="chartImg" alt="MobileAdminTotalDelegatedGRTIndexers"><MobileAdminTotalDelegatedGRTIndexers /></div>
          </div>

          <div className="photo-wrap chartImg5 reveal">
          <span class="anchor" id="mobilebar12"></span>
          <div className="chartImg" alt="MobileAdminTotalBurnedGRT"><MobileAdminTotalBurnedGRT /></div>
          </div>


          <h1 className="adminHeader-text admin-mobile-center-line reveal"><u>Mobile Line Graphs</u><br></br><br></br> 1. Click Export Button<br></br>2. Download PNG Image<br></br>3. Select View<br></br>4. Press and Hold the screen with finger<br></br>5. Select Add to Photos / Save Image</h1> 

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="mobileline1"></span>
          <div className="chartImg" alt="MobileAdminLineDelegatorCount"><MobileAdminLineDelegatorCount /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="mobileline2"></span>
          <div className="chartImg" alt="AdminLineIndexerCount"><MobileAdminLineIndexerCount /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="mobileline3"></span>
          <div className="chartImg" alt="AdminLineStakedIndexersCount"><MobileAdminLineStakedIndexersCount /></div>
          </div>

          <div className="photo-wrap chartImg6 reveal">
          <span class="anchor" id="mobileline4"></span>
          <div className="chartImg" alt="AdminLineSubgraphCount"><MobileAdminLineSubgraphCount /></div>
          </div>

          {/* <div className="photo-wrap chartImg6 reveal">
          <span class="anchor" id="mobileline5"></span>
          <div className="chartImg" alt="AdminLineSubgraphDeploymentCount"><MobileAdminLineSubgraphDeploymentCount /></div>
          </div> */}
          </div>
          <hr className="hr2 reveal monitor-config"></hr>
        </div>
  )
}};

export default ExportMobileConfig;