import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import React from 'react';
import '../../../App.css';
import {useGraphDataAPI, REQUEST_STATUS}  from '../../../hooks/useGraphAPI';
import { getLineGraphOptionsBuilder } from '../../helpers/graphOptionsBuilder';
import { sortToLineGraphDS } from '../../helpers/dataFormatters';

function AdminLineDelegatorCount(){
  const { data, requestStatus, error, status} = useGraphDataAPI();
  if(requestStatus === REQUEST_STATUS.LOADING){
    return(
      <div>Loading Chart...</div>
    )
  }
  if(requestStatus === REQUEST_STATUS.FAILURE){

    return(
      <>
      <h6 className="error">Sorry but we are having issues retrieving the data right now. Please come back soon.</h6>
        <p className="error">{error}</p>
       </>
    )
  }

  //could probs create a state machine for this

  //get the data and isolate the array
  const realData = data.graphNetworkDailyDatas;
  //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
  //list is a [timestamp : value] so its easy to plot 
  const combinedData = sortToLineGraphDS({data : realData, objectField :'delegatorCount'});
  //options builder like we have done previously
  const options = getLineGraphOptionsBuilder({ titleY: 30, type: 'spline', title : 'Delegators',titleFontSize: '2.5rem', xAxisType :'datetime', data: combinedData, seriesName :'Delegator Count',marginLeft: 100, marginRight: 100, marginBottom: 60, marginTop: 120,subtitleFontSize: '2vh',
  dataLabelFontSize: '3vh',
  subtitleX: 0,
  subtitleY: 20,
  tickInterval: 2000,
min: Date.UTC(2020,11,17),
logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70});
  
    return(
      <div>
        <HighchartsReact highcharts={Highcharts}
        options={options}/>
      </div>
    );
  }

  export default AdminLineDelegatorCount;

  export function AdminLineIndexerCount(){
    const { data, requestStatus, error, status} = useGraphDataAPI();
    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <div>Loading Chart...</div>
      )
    }
    if(requestStatus === REQUEST_STATUS.FAILURE){
  
      return(
        <>
        <h6 className="error">Sorry but we are having issues retrieving the data right now. Please come back soon.</h6>
          <p className="error">{error}</p>
         </>
      )
    }
  
    //could probs create a state machine for this
  
    //get the data and isolate the array
    const realData = data.graphNetworkDailyDatas;
    //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
    //list is a [timestamp : value] so its easy to plot 
    const combinedData = sortToLineGraphDS({data : realData, objectField :'indexerCount'});
    //options builder like we have done previously
    const options = getLineGraphOptionsBuilder({ titleY: 30, type: 'spline', title : 'Indexers', titleFontSize: '2.5rem',xAxisType :'datetime', data: combinedData, seriesName :'Indexer Count',marginLeft: 100, marginRight: 100, marginBottom: 60, marginTop: 120,subtitleFontSize: '2vh',
    dataLabelFontSize: '3vh',
    subtitleX: 0,
    subtitleY: 20,
    tickInterval: 50, min: Date.UTC(2020,11,12),
    logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70});
    
      return(
        <div>
          <HighchartsReact highcharts={Highcharts}
          options={options}/>
        </div>
      );
    }

    export function AdminLineStakedIndexersCount(){
      const { data, requestStatus, error, status} = useGraphDataAPI();
      if(requestStatus === REQUEST_STATUS.LOADING){
        return(
          <div>Loading Chart...</div>
        )
      }
      if(requestStatus === REQUEST_STATUS.FAILURE){
    
        return(
          <>
          <h6 className="error">Sorry but we are having issues retrieving the data right now. Please come back soon.</h6>
            <p className="error">{error}</p>
           </>
        )
      }
    
      //could probs create a state machine for this
    
      //get the data and isolate the array
      const realData = data.graphNetworkDailyDatas;
      //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
      //list is a [timestamp : value] so its easy to plot 
      const combinedData = sortToLineGraphDS({data : realData, objectField :'stakedIndexersCount'});
      //options builder like we have done previously
      const options = getLineGraphOptionsBuilder({ titleY: 30, type: 'spline', title : 'Staked Indexers', titleFontSize: '2.5rem',xAxisType :'datetime', data: combinedData, seriesName :'Staked Indexer Count',marginLeft: 100, marginRight: 100, marginBottom: 60, marginTop: 120,subtitleFontSize: '2vh',
      subtitleX: 0,
      subtitleY: 20,
      tickInterval: 50, min: Date.UTC(2020,11,15),
      logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70});
      
        return(
          <div>
            <HighchartsReact highcharts={Highcharts}
            options={options}/>
          </div>
        );
      }

      export function AdminLineSubgraphCount(){
        const { data, requestStatus, error, status} = useGraphDataAPI();
        if(requestStatus === REQUEST_STATUS.LOADING){
          return(
            <div>Loading Chart...</div>
          )
        }
        if(requestStatus === REQUEST_STATUS.FAILURE){
      
          return(
            <>
            <h6 className="error">Sorry but we are having issues retrieving the data right now. Please come back soon.</h6>
              <p className="error">{error}</p>
             </>
          )
        }
      
        //could probs create a state machine for this
      
        //get the data and isolate the array
        const realData = data.graphNetworkDailyDatas;
        //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
        //list is a [timestamp : value] so its easy to plot 
        const combinedData = sortToLineGraphDS({data : realData, objectField :'subgraphCount'});
        //options builder like we have done previously
        const options = getLineGraphOptionsBuilder({ titleY: 30, type: 'spline', title : 'Subgraphs', titleFontSize: '2.5rem',xAxisType :'datetime', data: combinedData, seriesName :'Subgraph Count',marginLeft: 100, marginRight: 100, marginBottom: 60, marginTop: 120,subtitleFontSize: '2vh',
        dataLabelFontSize: '3vh',
        subtitleX: 0,
        subtitleY: 20,
        tickInterval: 50, min: Date.UTC(2020,11,17),
        logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70});
        
          return(
            <div>
              <HighchartsReact highcharts={Highcharts}
              options={options}/>
            </div>
          );
        }

        export function AdminLineSubgraphDeploymentCount(){
          const { data, requestStatus, error, status} = useGraphDataAPI();
          if(requestStatus === REQUEST_STATUS.LOADING){
            return(
              <div>Loading Chart...</div>
            )
          }
          if(requestStatus === REQUEST_STATUS.FAILURE){
        
            return(
              <>
              <h6 className="error">Sorry but we are having issues retrieving the data right now. Please come back soon.</h6>
                <p className="error">{error}</p>
               </>
            )
          }
        
          //could probs create a state machine for this
        
          //get the data and isolate the array
          const realData = data.graphNetworkDailyDatas;
          //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
          //list is a [timestamp : value] so its easy to plot 
          const combinedData = sortToLineGraphDS({data : realData, objectField :'subgraphDeploymentCount'});
          //options builder like we have done previously
          const options = getLineGraphOptionsBuilder({ titleY: 30, type: 'spline', title : 'Subgraphs Deployed on Mainnet', titleFontSize: '2.5rem',xAxisType :'datetime', data: combinedData, seriesName :'Deployed Subgraphs Count',marginLeft: 100, marginRight: 100, marginBottom: 60, marginTop: 120,subtitleFontSize: '2vh',
          subtitleX: 0,
    subtitleY: 20,
          tickInterval: 50, min: Date.UTC(2020,11,17),
          logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70});
          
            return(
              <div>
                <HighchartsReact highcharts={Highcharts}
                options={options}/>
              </div>
            );
          }



          // Mobile 
          export function MobileAdminLineDelegatorCount(){
            const { data, requestStatus, error, status} = useGraphDataAPI();
            if(requestStatus === REQUEST_STATUS.LOADING){
              return(
                <div>Loading Chart...</div>
              )
            }
            if(requestStatus === REQUEST_STATUS.FAILURE){
          
              return(
                <>
                <h6 className="error">Sorry but we are having issues retrieving the data right now. Please come back soon.</h6>
                  <p className="error">{error}</p>
                 </>
              )
            }
          
            //could probs create a state machine for this
          
            //get the data and isolate the array
            const realData = data.graphNetworkDailyDatas;
            //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
            //list is a [timestamp : value] so its easy to plot 
            const combinedData = sortToLineGraphDS({data : realData, objectField :'delegatorCount'});
            //options builder like we have done previously
            const options = getLineGraphOptionsBuilder({ titleY: 30, type: 'spline', title : 'Delegators',titleFontSize: '2.5rem', xAxisType :'datetime', data: combinedData, seriesName :'Delegator Count',marginLeft: 100, marginRight: 100, marginBottom: 60, marginTop: 120,subtitleFontSize: '4vh',
            dataLabelFontSize: '3vh',
            subtitleX: 0,
            subtitleY: 20,
            tickInterval: 2000,
          min: Date.UTC(2020,11,17),
          logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'});
            
          return(
            <div>
              <HighchartsReact highcharts={Highcharts}
              options={options}/>
            </div>
          );
        }
          
            
          
            export function MobileAdminLineIndexerCount(){
              const { data, requestStatus, error, status} = useGraphDataAPI();
              if(requestStatus === REQUEST_STATUS.LOADING){
                return(
                  <div>Loading Chart...</div>
                )
              }
              if(requestStatus === REQUEST_STATUS.FAILURE){
            
                return(
                  <>
                  <h6 className="error">Sorry but we are having issues retrieving the data right now. Please come back soon.</h6>
                    <p className="error">{error}</p>
                   </>
                )
              }
            
              //could probs create a state machine for this
            
              //get the data and isolate the array
              const realData = data.graphNetworkDailyDatas;
              //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
              //list is a [timestamp : value] so its easy to plot 
              const combinedData = sortToLineGraphDS({data : realData, objectField :'indexerCount'});
              //options builder like we have done previously
              const options = getLineGraphOptionsBuilder({ titleY: 30, type: 'spline', title : 'Indexers', titleFontSize: '2.5rem',xAxisType :'datetime', data: combinedData, seriesName :'Indexer Count',marginLeft: 100, marginRight: 100, marginBottom: 60, marginTop: 120,subtitleFontSize: '4vh',
              dataLabelFontSize: '3vh',
              subtitleX: 0,
              subtitleY: 20,
              tickInterval: 50, min: Date.UTC(2020,11,12),
              logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'});
              
                return(
                  <div>
                    <HighchartsReact highcharts={Highcharts}
                    options={options}/>
                  </div>
                );
              }
          
              export function MobileAdminLineStakedIndexersCount(){
                const { data, requestStatus, error, status} = useGraphDataAPI();
                if(requestStatus === REQUEST_STATUS.LOADING){
                  return(
                    <div>Loading Chart...</div>
                  )
                }
                if(requestStatus === REQUEST_STATUS.FAILURE){
              
                  return(
                    <>
      <h6 className="error">Sorry but we are having issues retrieving the data right now. Please come back soon.</h6>
        <p className="error">{error}</p>
       </>
                  )
                }
              
                //could probs create a state machine for this
              
                //get the data and isolate the array
                const realData = data.graphNetworkDailyDatas;
                //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
                //list is a [timestamp : value] so its easy to plot 
                const combinedData = sortToLineGraphDS({data : realData, objectField :'stakedIndexersCount'});
                //options builder like we have done previously
                const options = getLineGraphOptionsBuilder({ titleY: 30, type: 'spline', title : 'Staked Indexers', titleFontSize: '2.5rem',xAxisType :'datetime', data: combinedData, seriesName :'Staked Indexer Count',marginLeft: 100, marginRight: 100, marginBottom: 60, marginTop: 120,subtitleFontSize: '4vh',
                subtitleX: 0,
                subtitleY: 20,
                tickInterval: 50, min: Date.UTC(2020,11,15),
                logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'});
                
                  return(
                    <div>
                      <HighchartsReact highcharts={Highcharts}
                      options={options}/>
                    </div>
                  );
                }
          
                export function MobileAdminLineSubgraphCount(){
                  const { data, requestStatus, error, status} = useGraphDataAPI();
                  if(requestStatus === REQUEST_STATUS.LOADING){
                    return(
                      <div>Loading Chart...</div>
                    )
                  }
                  if(requestStatus === REQUEST_STATUS.FAILURE){
                
                    return(
                      <>
                      <h6 className="error">Sorry but we are having issues retrieving the data right now. Please come back soon.</h6>
                        <p className="error">{error}</p>
                       </>
                    )
                  }
                
                  //could probs create a state machine for this
                
                  //get the data and isolate the array
                  const realData = data.graphNetworkDailyDatas;
                  //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
                  //list is a [timestamp : value] so its easy to plot 
                  const combinedData = sortToLineGraphDS({data : realData, objectField :'subgraphCount'});
                  //options builder like we have done previously
                  const options = getLineGraphOptionsBuilder({ titleY: 30, type: 'spline', title : 'Subgraphs', titleFontSize: '2.5rem',xAxisType :'datetime', data: combinedData, seriesName :'Subgraph Count',marginLeft: 100, marginRight: 100, marginBottom: 60, marginTop: 120,subtitleFontSize: '4vh',
                  dataLabelFontSize: '3vh',
                  subtitleX: 0,
                  subtitleY: 20,
                  tickInterval: 50, min: Date.UTC(2020,11,17),
                  logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'});
                  
                    return(
                      <div>
                        <HighchartsReact highcharts={Highcharts}
                        options={options}/>
                      </div>
                    );
                  }
          
              //     export function MobileAdminLineSubgraphDeploymentCount(){
              //       const { data, requestStatus, error, status} = useGraphDataAPI();
              //       if(requestStatus === REQUEST_STATUS.LOADING){
              //         return(
              //           <div>Loading Chart...</div>
              //         )
              //       }
              //       if(requestStatus === REQUEST_STATUS.FAILURE){
                  
              //         return(
              //           <div>Error ! {error} : {status}</div>
              //         )
              //       }
                  
              //       //could probs create a state machine for this
                  
              //       //get the data and isolate the array
              //       const realData = data.graphNetworkDailyDatas;
              //       //pass in the array and also the yaxis field, so in this case its the delegator count but could be whatever field you want wil return a list
              //       //list is a [timestamp : value] so its easy to plot 
              //       const combinedData = sortToLineGraphDS({data : realData, objectField :'subgraphDeploymentCount'});
              //       //options builder like we have done previously
              //       const options = getLineGraphOptionsBuilder({ type: 'spline', title : 'Subgraphs Deployed on Mainnet', titleFontSize: '2.5rem',xAxisType :'datetime', data: combinedData, seriesName :'Deployed Subgraphs Count',marginLeft: 100, marginRight: 100, marginBottom: 60, marginTop: 120,subtitleFontSize: '4vh',
              //       subtitleX: 0,
              // subtitleY: 20,
              //       tickInterval: 50, min: Date.UTC(2020,11,17),
              //       logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'});
                    
              //         return(
              //           <div>
              //             <HighchartsReact highcharts={Highcharts}
              //             options={options}/>
              //           </div>
              //         );
              //       }