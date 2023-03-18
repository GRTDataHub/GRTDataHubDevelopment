import React from 'react';
import '../../App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { getDaysInRange } from '../helpers/dateParser';
import { REQUEST_STATUS, useBarAPI } from '../../hooks/useGraphAPI';
import { useColumnGraphOptionsBuilder} from '../helpers/graphOptionsBuilder';

function MonitorActiveDelegatorCountBar(){

  //this will go off and get our data for us as this is our custom hook to get api data. from here we can access data
  //acces the request status so if it successful or not and if there is an err msg. will automatically get data on refresh for you
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  //configure options for the graph, another custom hook returns the obj that we pass to create graph
  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', titleY: 30, title: 'Active Delegators', titleFontSize: '2rem',seriesName: 'Active Delegators', subtitleFontSize: '0.8rem',
    yAxis : 'Tokens', xAxis: 'Date', 
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeDelegatorCount?.Amount28D, data?.activeDelegatorCount?.Amount7D, data?.activeDelegatorCount?.AmountNow],
    tickInterval : ([data?.activeDelegatorCount?.Amount28D+data?.activeDelegatorCount?.Amount7D+data?.activeDelegatorCount?.AmountNow]/100),
    min: [([data?.activeDelegatorCount?.Amount28D+data?.activeDelegatorCount?.Amount7D+data?.activeDelegatorCount?.AmountNow]/3)*0.95],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
};

export default MonitorActiveDelegatorCountBar;

export function MonitorHoldersCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', titleY: 30, title: 'Holders', titleFontSize: '2rem', seriesName: 'Holders', subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.holdersCount?.Amount28D, data?.holdersCount?.Amount7D, data?.holdersCount?.AmountNow],
    tickInterval : ([data?.holdersCount?.Amount28D+data?.holdersCount?.Amount7D+data?.holdersCount?.AmountNow]/80),
    min: [([data?.holdersCount?.Amount28D+data?.holdersCount?.Amount7D+data?.holdersCount?.AmountNow]/3)*0.93],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0,  height: '60%'
  });

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}

export function MonitorSubgraphCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', titleY: 30, title: 'Subgraphs',titleFontSize: '2rem', seriesName:'Subgraphs', subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.subgraphCount?.Amount28D, data?.subgraphCount?.Amount7D, data?.subgraphCount?.AmountNow],tickInterval : ([data?.subgraphCount?.Amount28D+data?.subgraphCount?.Amount7D+data?.subgraphCount?.AmountNow]/80),
    min: [([data?.subgraphCount?.Amount28D+data?.subgraphCount?.Amount7D+data?.subgraphCount?.AmountNow]/3)*0.9],
    dataLabelFontSize: '1rem',
    dataLabelX: 0, subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0,  height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}

export function MonitorCuratorCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', titleY: 30, title: 'Curators', titleFontSize: '2rem',seriesName: 'Curators', subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.curatorCount?.Amount28D, data?.curatorCount?.Amount7D, data?.curatorCount?.AmountNow],
    tickInterval : ([data?.curatorCount?.Amount28D+data?.curatorCount?.Amount7D+data?.curatorCount?.AmountNow]/400),
    min: [([data?.curatorCount?.Amount28D+data?.curatorCount?.Amount7D+data?.curatorCount?.AmountNow]/3)*0.99],
    dataLabelFontSize: '1rem',
    dataLabelX: 0, subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}

export function MonitorActiveDelegationCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', titleY: 30, title: 'Active Delegation Count',titleFontSize: '2rem', seriesName: 'Active Delegation Count', subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeDelegationCount?.Amount28D, data?.activeDelegationCount?.Amount7D, data?.activeDelegationCount?.AmountNow],
    tickInterval : ([data?.activeDelegationCount?.Amount28D+data?.activeDelegationCount?.Amount7D+data?.activeDelegationCount?.AmountNow]/200),
    min: [([data?.activeDelegationCount?.Amount28D+data?.activeDelegationCount?.Amount7D+data?.activeDelegationCount?.AmountNow]/3)*0.97],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}

export function MonitorActiveIndexersCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', titleY: 30, title: 'Active Indexers', titleFontSize: '2rem',seriesName: 'Active Indexers',subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeIndexersCount?.Amount28D, data?.activeIndexersCount?.Amount7D, data?.activeIndexersCount?.AmountNow],
    tickInterval : ([data?.activeIndexersCount?.Amount28D+data?.activeIndexersCount?.Amount7D+data?.activeIndexersCount?.AmountNow]/20),
    min: [([data?.activeIndexersCount?.Amount28D+data?.activeIndexersCount?.Amount7D+data?.activeIndexersCount?.AmountNow]/3)*0.5],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}

export function MonitorTotalDelegatedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', titleY: 30, title: 'Total Delegated GRT by Delegators', titleFontSize: '2rem',seriesName: 'Total Delegated GRT by Delegators',subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalDelegatedTokens?.Amount28D, data?.totalDelegatedTokens?.Amount7D, data?.totalDelegatedTokens?.AmountNow],
    tickInterval : ([data?.totalDelegatedTokens?.Amount28D+data?.totalDelegatedTokens?.Amount7D+data?.totalDelegatedTokens?.AmountNow]/500),
    min: [([data?.totalDelegatedTokens?.Amount28D+data?.totalDelegatedTokens?.Amount7D+data?.totalDelegatedTokens?.AmountNow]/3)*0.98],
    dataLabelFontSize: '0.9rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}

export function MonitorTotalDelegatedGRTIndexers(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', titleY: 30, title: 'Total Staked GRT by Indexers', titleFontSize: '2rem',seriesName: 'Total Staked GRT by Indexers',subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalTokensStaked?.Amount28D, data?.totalTokensStaked?.Amount7D, data?.totalTokensStaked?.AmountNow],
    tickInterval : ([data?.totalTokensStaked?.Amount28D+data?.totalTokensStaked?.Amount7D+data?.totalTokensStaked?.AmountNow]/20),
    min: [([data?.totalTokensStaked?.Amount28D+data?.totalTokensStaked?.Amount7D+data?.totalTokensStaked?.AmountNow]/3)*0.7],
    dataLabelFontSize: '0.9rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}

export function MonitorTotalQueryFees(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 85, marginRight: 80,type: 'column', titleY: 30, title: 'Total Query Fees (GRT)', titleFontSize: '2rem', seriesName: 'Total Query Fees (GRT)',subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalQueryFees?.Amount28D, data?.totalQueryFees?.Amount7D, data?.totalQueryFees?.AmountNow],
    tickInterval : ([data?.totalQueryFees?.Amount28D+data?.totalQueryFees?.Amount7D+data?.totalQueryFees?.AmountNow]/50),
    min: [([data?.totalQueryFees?.Amount28D+data?.totalQueryFees?.Amount7D+data?.totalQueryFees?.AmountNow]/3)*0.85],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}


export function MonitorTotalTokensSignalled(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', titleY: 30, title: 'Total Signalled GRT by Curators', titleFontSize: '2rem',seriesName: 'Total Signalled GRT by Curators',subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalTokensSignalled?.Amount28D, data?.totalTokensSignalled?.Amount7D, data?.totalTokensSignalled?.AmountNow],
    tickInterval : ([data?.totalTokensSignalled?.Amount28D+data?.totalTokensSignalled?.Amount7D+data?.totalTokensSignalled?.AmountNow]/50),
    min: [([data?.totalTokensSignalled?.Amount28D+data?.totalTokensSignalled?.Amount7D+data?.totalTokensSignalled?.AmountNow]/3)*0.80],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}

export function MonitorTotalStakedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange();

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 85, marginRight: 80,type: 'column', titleY: 30, title: 'Total Staked GRT', titleFontSize: '2rem',seriesName: 'Total Staked GRT',
    categories: [lastMonth, lastWeek, Now], subtitleFontSize: '0.8rem',
    data : [data?.totalTokensAllocated?.Amount28D, data?.totalTokensAllocated?.Amount7D, data?.totalTokensAllocated?.AmountNow],
    tickInterval : ([data?.totalTokensAllocated?.Amount28D+data?.totalTokensAllocated?.Amount7D+data?.totalTokensAllocated?.AmountNow]/100),
    min: [([data?.totalTokensAllocated?.Amount28D+data?.totalTokensAllocated?.Amount7D+data?.totalTokensAllocated?.AmountNow]/3)*0.90],
    dataLabelFontSize: '0.9rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0, height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}

export function MonitorTotalBurnedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange();

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 85, marginRight: 80,type: 'column', titleY: 30, title: 'Total GRT Burned', titleFontSize: '2rem',seriesName: 'Total GRT Burned',
    categories: [lastMonth, lastWeek, Now], subtitleFontSize: '0.8rem',
    data : [data?.totalGRTBurned?.Amount28D, data?.totalGRTBurned?.Amount7D, data?.totalGRTBurned?.AmountNow],
    tickInterval : ([data?.totalGRTBurned?.Amount28D+data?.totalGRTBurned?.Amount7D+data?.totalGRTBurned?.AmountNow]/200),
    min: [([data?.totalGRTBurned?.Amount28D+data?.totalGRTBurned?.Amount7D+data?.totalGRTBurned?.AmountNow]/3)*0.98],
    dataLabelFontSize: '0.9rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0, height: '60%'});

    if(requestStatus === REQUEST_STATUS.LOADING){
      return(
        <h6>Loading Bar Chart ....</h6>
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
  return(
    <div>
      <HighchartsReact highcharts={Highcharts}
      options={options}/>
    </div>
  );
}

