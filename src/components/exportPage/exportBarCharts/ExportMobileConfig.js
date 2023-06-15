import React from 'react';
import '../../../App.css';

import NewExportTotalTokensStakedBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalTokensStakedBarChartsData";
import NewExportMonitorCuratorBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportMonitorCuratorBarChartsData";
import NewExportMonitorDelegatorBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportMonitorDelegatorBarChartsData";
import NewExportMonitorIndexerBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportMonitorIndexerBarChartsData";
import NewExportMonitorStakedIndexerBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportMonitorStakedIndexerBarChartsData";
import NewExportMonitorSubgraphBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportMonitorSubgraphBarChartsData";
import NewExportMonitorSubgraphDeployedBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportMonitorSubgraphDeployedBarChartsData";
import NewExportTotalCuratorQueryFeesBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalCuratorQueryFeesBarChartsData";
import NewExportTotalDelegatedTokensBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalDelegatedTokensBarChartsData";
import NewExportTotalDelegatorQueryFeeRebatesBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalDelegatorQueryFeeRebatesBarChartsData";
import NewExportTotalIndexerQueryFeeRebatesBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalIndexerQueryFeeRebatesBarChartsData";
import NewExportTotalIndexerQueryFeesCollectedBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalIndexerQueryFeesCollectedBarChartsData";
import NewExportMonitorTotalIndexingDelegatorRewardsBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalIndexingDelegatorRewardsBarChartsData";
import NewExportTotalIndexingIndexerRewardsBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalIndexingIndexerRewardsBarChartsData";
import NewExportTotalIndexingRewardsBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalIndexingRewardsBarChartsData";
import NewExportTotalQueryFeesBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalQueryFeesBarChartsData";
import NewExportTotalTaxedQueryFeesBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalTaxedQueryFeesBarChartsData";
import NewExportTotalTokensAllocatedBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalTokensAllocatedBarChartsData";
import NewExportTotalTokensSignalledBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalTokensSignalledBarChartsData";
import NewExportTotalUnclaimedQueryFeeRebatesBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalUnclaimedQueryFeeRebatesBarChartsData";
import NewExportMonitorTotalUnstakedTokensLockedBarChartsData from "../exportBarCharts/exportMonitorBarCharts/NewExportTotalUnstakedTokensLockedBarChartsData";

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
  <div className="photo-wrap chartImg1 reveal">
          <span class="anchor" id="monitorbar1"></span>
          <div alt="AdminActiveDelegatorCountBar" className="adminChart1 chartImg"><NewExportMonitorCuratorBarChartsData /></div>
          </div>
         
          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorbar2"></span>
          <div alt="AdminHoldersCountBar" className="chartImg"><NewExportMonitorDelegatorBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorbar3"></span>
          <div alt="AdminSubgraphCountBar " className="chartImg"><NewExportMonitorIndexerBarChartsData  /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorbar4"></span>
          <div alt="AdminCuratorCountBar" className="chartImg"><NewExportMonitorStakedIndexerBarChartsData  /></div>
          </div>
  
          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorbar5"></span>
          <div className="chartImg" alt="AdminActiveDelegationCountBar "><NewExportMonitorSubgraphBarChartsData  /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="monitorbar6"></span>
          <div className="chartImg" alt="AdminActiveIndexersCountBar"><NewExportMonitorSubgraphDeployedBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg3 reveal">
          <span class="anchor" id="monitorbar7"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTDelegator"><NewExportTotalCuratorQueryFeesBarChartsData  /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar8"></span>
          <div className="chartImg" alt="AdminTotalQueryFees"><NewExportTotalDelegatedTokensBarChartsData  /></div>
          </div>

          <div className="photo-wrap chartImg5 reveal">
          <span class="anchor" id="monitorbar9"></span>
          <div className="chartImg" alt="AdminTotalTokensSignalled"><NewExportTotalDelegatorQueryFeeRebatesBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar10"></span>
          <div className="chartImg" alt="AdminTotalStakedGRT"><NewExportTotalIndexerQueryFeeRebatesBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><NewExportTotalIndexerQueryFeesCollectedBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><NewExportTotalIndexingIndexerRewardsBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><NewExportTotalIndexingRewardsBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><NewExportTotalQueryFeesBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><NewExportTotalTaxedQueryFeesBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><NewExportTotalTokensAllocatedBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><NewExportTotalTokensSignalledBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><NewExportTotalTokensStakedBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><NewExportTotalUnclaimedQueryFeeRebatesBarChartsData /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="monitorbar11"></span>
          <div className="chartImg" alt="AdminTotalDelegatedGRTIndexer"><NewExportMonitorTotalUnstakedTokensLockedBarChartsData /></div>
          </div>
          
          <div className="photo-wrap chartImg5 reveal">
          <span class="anchor" id="monitorbar12"></span>
          <div className="chartImg" alt="AdminTotalBurnedGRT"><NewExportMonitorTotalIndexingDelegatorRewardsBarChartsData /></div>
          </div>

          <h1 className="adminHeader-text admin-mobile-center-line reveal"><u>Mobile Line Graphs</u></h1> 

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