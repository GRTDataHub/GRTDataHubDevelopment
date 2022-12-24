import React from 'react';
import '../../App.css';
import LineDelegatorCount, { LineIndexerCount, LineStakedIndexersCount, LineSubgraphCount
  // , LineSubgraphDeploymentCount
} from "../mainLineGraphs/LineGraphsData";
// import JsPDF from 'jspdf'
// import html2canvas from 'html2canvas'

// const downloadImage = () => {
//   html2canvas(document.querySelector('#capture')).then(canvas => {
//     document.body.appendChild(canvas)
//     const imgData = canvas.toDataURL('image/png')
//     const pdf = new JsPDF('l')
//     pdf.addImage(imgData, 'PNG', -0.5, -0.5, 297.5, 211)
//     pdf.save('Holders.pdf')
//     document.body.removeChild(canvas)
//   })
// }

class LineGraphs extends React.Component {
  
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
          <hr className="hr reveal"></hr>
          <h1 className="chartsTitle reveal">Line Graphs</h1>

          <div className="photo-wrap chartImg1 reveal">
          <span class="anchor" id="line1"></span>
          <div className="chartImg" alt="Delegators"><LineDelegatorCount /></div>
          </div>

          <div className="photo-wrap chartImg2 reveal">
          <span class="anchor" id="line2"></span>
          <div className="chartImg" alt="Indexers"><LineIndexerCount /></div>
          </div>

          <div className="photo-wrap chartImg4 reveal">
          <span class="anchor" id="line3"></span>
          <div className="chartImg" alt="Staked Indexers"><LineStakedIndexersCount/></div>
          </div>
          
          <div className="photo-wrap chartImg6 bottomLine reveal">
          <span class="anchor" id="line4"></span>
          <div className="chartImg" alt="Subgraphs"><LineSubgraphCount /></div>
          </div>
          <hr className="hr reveal"></hr>
          {/* <span class="anchor" id="line5"></span>
          <div className="chartImg" alt="Deployed Subgraphs"><LineSubgraphDeploymentCount /></div> */}
         
          
          <div className="photo-wrap chartImg6 GRTDailyTransactionsPosition reveal" alt="Deployed Subgraphs"><span class="anchor" id="line6"></span><iframe className="map GRTDailyTransactions" title="GRT Daily Transactions" src="https://dune.com/embeds/681010/1272035/a35e61c1-5db1-4630-ac36-e8b4416c3e87" width="900" height="400" frameborder="0"></iframe></div>
        
          <div className="photo-wrap chartImg6 GRTDailyTransactionsPosition reveal" alt="Deployed Subgraphs"><span class="anchor" id="line7"></span><iframe className="map GRTDailyTransactions" title="GRT Bought Hourly" src="https://dune.com/embeds/680926/1272068/e31f19d3-6354-4a8f-9150-20fc4163192c" width="900" height="400" frameborder="0"></iframe></div>
 
          <div className="photo-wrap chartImg6 Holders reveal" alt="Holders"><span class="anchor" id="line8"></span><iframe id="capture" className="map HoldersGraph" title="Crab | Wallets with 1-5k GRT" src="https://dune.com/embeds/680332/1261933/f33d860f-7ec2-4111-a264-cba5c47f5aa7" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Crab | Wallets with 5k-10k GRT" src="https://dune.com/embeds/680335/1261936/0d9b06bb-f45f-4f10-8b5d-fc3caac7135e" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Octopus |Wallets with 10k-50k GRT" src="https://dune.com/embeds/680336/1261937/d45b1c1a-eeb9-4ed2-959e-f65460e65d52" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Fish |Wallets with 50k-100k GRT" src="https://dune.com/embeds/680337/1261939/a110ba1d-3bd0-439e-95e0-b73474af794d" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Dolphin |Wallets with 100k-500k GRT" src="https://dune.com/embeds/680339/1261941/a0d84693-9302-44fb-8543-cb2ac5b3347f" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraph" title="Shark |Wallets with 500k-1M GRT" src="https://dune.com/embeds/680340/1261944/bce48f59-6646-4282-8ba8-51e5495263f1" width="900" height="70" frameborder="0"></iframe><iframe className="map HoldersGraphBottom" title="Whale |Wallets with > 1M GRT" src="https://dune.com/embeds/680342/1261947/0361e052-0157-40de-ac42-e6cfbed54bbf" width="900" height="70" frameborder="0"></iframe>
          </div>          
          </div>
<div>
          <h3 className="extra-data">Looking for more data? Check out the <a className="data-link" href="https://thegraph.com/explorer/network" target="_blank" rel="noreferrer">Graph Explorer Activity</a> or</h3>
          <h3 className="extra-data2">to view the live <a className="data-link" href="https://thegraph.com/explorer/network/epochs" target="_blank" rel="noreferrer">Epoch Data</a>.</h3></div>
    
        </div>
        
  )
}};

export default LineGraphs;