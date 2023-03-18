import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import React from 'react';
import '../../App.css';
import {useGraphDataAPI, REQUEST_STATUS}  from '../../hooks/useGraphAPI';
import { getLineGraphOptionsBuilder } from '../helpers/graphOptionsBuilder';
import { sortToLineGraphDS } from '../helpers/dataFormatters';

function LandscapeMobileLineDelegatorCount(){
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
  const options = getLineGraphOptionsBuilder({ type: 'spline', titleY: 75,  title : 'Delegators',titleFontSize: '1.5rem', xAxisType :'datetime', data: combinedData, seriesName :'Delegator Count', marginLeft: 150, marginRight: 0, marginBottom: 60, titleY: 20, marginTop: 40,subtitleFontSize: '0.8rem',
  dataLabelFontSize: '3vh',
  subtitleX: 0,
  subtitleY: 25,
  tickInterval: 2000,
min: Date.UTC(2020,11,17),
logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '30%', width: '80%'});
  
    return(
      <div>
        <HighchartsReact highcharts={Highcharts}
        options={options}/>
      </div>
    );
  }

  export default LandscapeMobileLineDelegatorCount;

  export function LandscapeMobileLineIndexerCount(){
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
    const options = getLineGraphOptionsBuilder({ type: 'spline', titleY: 75, title : 'Indexers',titleFontSize: '1.5rem', xAxisType :'datetime', data: combinedData, seriesName :'Indexer Count',marginLeft: 150, marginRight: 0, marginBottom: 60, titleY: 20, marginTop: 40,subtitleFontSize: '0.8rem',
    dataLabelFontSize: '3vh',
    subtitleX: 0,
    subtitleY: 25,
    tickInterval: 50, min: Date.UTC(2020,11,12),
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '30%', width: '80%'});
    
      return(
        <div>
          <HighchartsReact highcharts={Highcharts}
          options={options}/>
        </div>
      );
    }

    export function LandscapeMobileLineStakedIndexersCount(){
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
      const options = getLineGraphOptionsBuilder({ type: 'spline', titleY: 75, titleFontSize: '1.5rem',title : 'Staked Indexers', xAxisType :'datetime', data: combinedData, seriesName :'Staked Indexer Count',marginLeft: 150, marginRight: 0, marginBottom: 60, titleY: 20, marginTop: 40,subtitleFontSize: '0.8rem',
      dataLabelFontSize: '3vh',
      subtitleX: 0,
      subtitleY: 25,
      tickInterval: 50, min: Date.UTC(2020,11,15),
      logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
      dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '30%', width: '80%'});
      
        return(
          <div>
            <HighchartsReact highcharts={Highcharts}
            options={options}/>
          </div>
        );
      }

      export function LandscapeMobileLineSubgraphCount(){
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
        const options = getLineGraphOptionsBuilder({ type: 'spline', titleY: 75, title : 'Subgraphs',titleFontSize: '1.5rem', xAxisType :'datetime', data: combinedData, seriesName :'Subgraph Count',marginLeft: 150, marginRight: 0, marginBottom: 60, titleY: 20, marginTop: 40,subtitleFontSize: '0.8rem',
        dataLabelFontSize: '3vh',
        subtitleX: 0,
        subtitleY: 25,
        tickInterval: 50, min: Date.UTC(2020,11,17),
        logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
        dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '30%', width: '80%'});
        
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
        //   const options = getLineGraphOptionsBuilder({ type: 'spline', titleY: 75, titleFontSize: '2rem',title : 'Subgraphs Deployed on Mainnet', xAxisType :'datetime', data: combinedData, seriesName :'Deployed Subgraphs Count',marginLeft: 80, marginRight: 40, marginBottom: 60, marginTop: 40,subtitleFontSize: '0.8rem',
        //   dataLabelFontSize: '3vh',
        //   subtitleY: 25,
        //   tickInterval: 50, min: Date.UTC(2020,11,17),
        //   logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
        //   dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '30%'});
          
        //     return(
        //       <div>
        //         <HighchartsReact highcharts={Highcharts}
        //         options={options}/>
        //       </div>
        //     );
        //   }