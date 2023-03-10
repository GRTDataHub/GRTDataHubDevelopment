import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import React from 'react';
import '../../App.css';
import {useGraphDataAPI, REQUEST_STATUS}  from '../../hooks/useGraphAPI';
import { getLineGraphOptionsBuilder } from '../helpers/graphOptionsBuilder';
import { sortToLineGraphDS } from '../helpers/dataFormatters';

function LineDelegatorCount(){
  const { data, requestStatus, error, status} = useGraphDataAPI();
  if(requestStatus === REQUEST_STATUS.LOADING){
    return(
      <div>Loading Chart...</div>
    )
  }
  if(requestStatus === REQUEST_STATUS.FAILURE){

    return(
      <div>Error ! {error} : {status}</div>
    )
  }

  //could probs create a state machine for this

  //get the data and isolate the array
  const realData = data.graphNetworkDailyDatas;
  //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
  //list is a [timestamp : value] so its easy to plot 
  const combinedData = sortToLineGraphDS({data : realData, objectField :'delegatorCount'});
  //options builder like we have done previously
  const options = getLineGraphOptionsBuilder({ type: 'spline', title : 'Delegators',titleFontSize: '2rem', xAxisType :'datetime', data: combinedData, seriesName :'Delegator Count',marginLeft: 80, marginRight: 40, marginBottom: 60, marginTop: 100,subtitleFontSize: '0.8rem',
  dataLabelFontSize: '3vh',
  subtitleX: 0,
  subtitleY: 25,
  tickInterval: 2000,
min: Date.UTC(2020,11,17),
logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});
  
    return(
      <div>
        <HighchartsReact highcharts={Highcharts}
        options={options}/>
      </div>
    );
  }

  export default LineDelegatorCount;

  export function LineIndexerCount(){
    const { data, requestStatus, error, status} = useGraphDataAPI();
    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <div>Loading Chart...</div>
      )
    }
    if(requestStatus === REQUEST_STATUS.FAILURE){
  
      return(
        <div>Error ! {error} : {status}</div>
      )
    }
  
    //could probs create a state machine for this
  
    //get the data and isolate the array
    const realData = data.graphNetworkDailyDatas;
    //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
    //list is a [timestamp : value] so its easy to plot 
    const combinedData = sortToLineGraphDS({data : realData, objectField :'indexerCount'});
    //options builder like we have done previously
    const options = getLineGraphOptionsBuilder({ type: 'spline', title : 'Indexers',titleFontSize: '2rem', xAxisType :'datetime', data: combinedData, seriesName :'Indexer Count',marginLeft: 80, marginRight: 40, marginBottom: 60, marginTop: 100,subtitleFontSize: '0.8rem',
    dataLabelFontSize: '3vh',
    subtitleX: 0,
    subtitleY: 25,
    tickInterval: 50, min: Date.UTC(2020,11,12),
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});
    
      return(
        <div>
          <HighchartsReact highcharts={Highcharts}
          options={options}/>
        </div>
      );
    }

    export function LineStakedIndexersCount(){
      const { data, requestStatus, error, status} = useGraphDataAPI();
      if(requestStatus === REQUEST_STATUS.LOADING){
        return(
          <div>Loading Chart...</div>
        )
      }
      if(requestStatus === REQUEST_STATUS.FAILURE){
    
        return(
          <div>Error ! {error} : {status}</div>
        )
      }
    
      //could probs create a state machine for this
    
      //get the data and isolate the array
      const realData = data.graphNetworkDailyDatas;
      //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
      //list is a [timestamp : value] so its easy to plot 
      const combinedData = sortToLineGraphDS({data : realData, objectField :'stakedIndexersCount'});
      //options builder like we have done previously
      const options = getLineGraphOptionsBuilder({ type: 'spline', titleFontSize: '2rem',title : 'Staked Indexers', xAxisType :'datetime', data: combinedData, seriesName :'Staked Indexer Count',marginLeft: 80, marginRight: 40, marginBottom: 60, marginTop: 100,subtitleFontSize: '0.8rem',
      dataLabelFontSize: '3vh',
      subtitleX: 0,
      subtitleY: 25,
      tickInterval: 50, min: Date.UTC(2020,11,15),
      logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
      dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});
      
        return(
          <div>
            <HighchartsReact highcharts={Highcharts}
            options={options}/>
          </div>
        );
      }

      export function LineSubgraphCount(){
        const { data, requestStatus, error, status} = useGraphDataAPI();
        if(requestStatus === REQUEST_STATUS.LOADING){
          return(
            <div>Loading Chart...</div>
          )
        }
        if(requestStatus === REQUEST_STATUS.FAILURE){
      
          return(
            <div>Error ! {error} : {status}</div>
          )
        }
      
        //could probs create a state machine for this
      
        //get the data and isolate the array
        const realData = data.graphNetworkDailyDatas;
        //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
        //list is a [timestamp : value] so its easy to plot 
        const combinedData = sortToLineGraphDS({data : realData, objectField :'subgraphCount'});
        //options builder like we have done previously
        const options = getLineGraphOptionsBuilder({ type: 'spline', title : 'Subgraphs',titleFontSize: '2rem', xAxisType :'datetime', data: combinedData, seriesName :'Subgraph Count',marginLeft: 80, marginRight: 40, marginBottom: 60, marginTop: 100,subtitleFontSize: '0.8rem',
        dataLabelFontSize: '3vh',
        subtitleX: 0,
        subtitleY: 25,
        tickInterval: 50, min: Date.UTC(2020,11,17),
        logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
        dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});
        
          return(
            <div>
              <HighchartsReact highcharts={Highcharts}
              options={options}/>
            </div>
          );
        }

        // export function LineSubgraphDeploymentCount(){
        //   const { data, requestStatus, error, status} = useGraphDataAPI();
        //   if(requestStatus === REQUEST_STATUS.LOADING){
        //     return(
        //       <div>Loading Chart...</div>
        //     )
        //   }
        //   if(requestStatus === REQUEST_STATUS.FAILURE){
        
        //     return(
        //       <div>Error ! {error} : {status}</div>
        //     )
        //   }
        
        //   //could probs create a state machine for this
        
        //   //get the data and isolate the array
        //   const realData = data.graphNetworkDailyDatas;
        //   //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
        //   //list is a [timestamp : value] so its easy to plot 
        //   const combinedData = sortToLineGraphDS({data : realData, objectField :'subgraphDeploymentCount'});
        //   //options builder like we have done previously
        //   const options = getLineGraphOptionsBuilder({ type: 'spline', titleFontSize: '2rem',title : 'Subgraphs Deployed on Mainnet', xAxisType :'datetime', data: combinedData, seriesName :'Deployed Subgraphs Count',marginLeft: 80, marginRight: 40, marginBottom: 60, marginTop: 100,subtitleFontSize: '0.8rem',
        //   dataLabelFontSize: '3vh',
        //   subtitleY: 25,
        //   tickInterval: 50, min: Date.UTC(2020,11,17),
        //   logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
        //   dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});
          
        //     return(
        //       <div>
        //         <HighchartsReact highcharts={Highcharts}
        //         options={options}/>
        //       </div>
        //     );
        //   }