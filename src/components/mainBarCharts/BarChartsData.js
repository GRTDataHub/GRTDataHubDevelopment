import React from 'react';
import '../../App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import NumberFormat from 'react-number-format';

import { getDaysInRange } from '../helpers/dateParser';
import { REQUEST_STATUS, useBarAPI } from '../../hooks/useGraphAPI';
import { useColumnGraphOptionsBuilder} from '../helpers/graphOptionsBuilder';

function ActiveDelegatorCountBar(){

  //this will go off and get our data for us as this is our custom hook to get api data. from here we can access data
  //acces the request status so if it successful or not and if there is an err msg. will automatically get data on refresh for you
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  //configure options for the graph, another custom hook returns the obj that we pass to create graph
  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', title: 'Active Delegators', titleFontSize: '2rem',seriesName: 'Active Delegators', subtitleFontSize: '0.8rem',
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
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});

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

export default ActiveDelegatorCountBar;

export function HoldersCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', title: 'Holders', titleFontSize: '2rem', seriesName: 'Holders', subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.holdersCount?.Amount28D, data?.holdersCount?.Amount7D, data?.holdersCount?.AmountNow],
    tickInterval : ([data?.holdersCount?.Amount28D+data?.holdersCount?.Amount7D+data?.holdersCount?.AmountNow]/80),
    min: [([data?.holdersCount?.Amount28D+data?.holdersCount?.Amount7D+data?.holdersCount?.AmountNow]/3)*0.93],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0,  height: '40%'
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

export function SubgraphCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', title: 'Subgraphs',titleFontSize: '2rem', seriesName:'Subgraphs', subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.subgraphCount?.Amount28D, data?.subgraphCount?.Amount7D, data?.subgraphCount?.AmountNow],tickInterval : ([data?.subgraphCount?.Amount28D+data?.subgraphCount?.Amount7D+data?.subgraphCount?.AmountNow]/80),
    min: [([data?.subgraphCount?.Amount28D+data?.subgraphCount?.Amount7D+data?.subgraphCount?.AmountNow]/3)*0.9],
    dataLabelFontSize: '1rem',
    dataLabelX: 0, subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0,  height: '40%'});

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

export function CuratorCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', title: 'Curators', titleFontSize: '2rem',seriesName: 'Curators', subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.curatorCount?.Amount28D, data?.curatorCount?.Amount7D, data?.curatorCount?.AmountNow],
    tickInterval : ([data?.curatorCount?.Amount28D+data?.curatorCount?.Amount7D+data?.curatorCount?.AmountNow]/400),
    min: [([data?.curatorCount?.Amount28D+data?.curatorCount?.Amount7D+data?.curatorCount?.AmountNow]/3)*0.99],
    dataLabelFontSize: '1rem',
    dataLabelX: 0, subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});

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

export function ActiveDelegationCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', title: 'Active Delegation Count',titleFontSize: '2rem', seriesName: 'Active Delegation Count', subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeDelegationCount?.Amount28D, data?.activeDelegationCount?.Amount7D, data?.activeDelegationCount?.AmountNow],
    tickInterval : ([data?.activeDelegationCount?.Amount28D+data?.activeDelegationCount?.Amount7D+data?.activeDelegationCount?.AmountNow]/200),
    min: [([data?.activeDelegationCount?.Amount28D+data?.activeDelegationCount?.Amount7D+data?.activeDelegationCount?.AmountNow]/3)*0.97],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});

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

export function ActiveIndexersCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', title: 'Active Indexers', titleFontSize: '2rem',seriesName: 'Active Indexers',subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeIndexersCount?.Amount28D, data?.activeIndexersCount?.Amount7D, data?.activeIndexersCount?.AmountNow],
    tickInterval : ([data?.activeIndexersCount?.Amount28D+data?.activeIndexersCount?.Amount7D+data?.activeIndexersCount?.AmountNow]/20),
    min: [([data?.activeIndexersCount?.Amount28D+data?.activeIndexersCount?.Amount7D+data?.activeIndexersCount?.AmountNow]/3)*0.7],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});

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

export function TotalDelegatedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', title: 'Total Delegated GRT by Delegators', titleFontSize: '2rem',seriesName: 'Total Delegated GRT by Delegators',subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalDelegatedTokens?.Amount28D, data?.totalDelegatedTokens?.Amount7D, data?.totalDelegatedTokens?.AmountNow],
    tickInterval : ([data?.totalDelegatedTokens?.Amount28D+data?.totalDelegatedTokens?.Amount7D+data?.totalDelegatedTokens?.AmountNow]/500),
    min: [([data?.totalDelegatedTokens?.Amount28D+data?.totalDelegatedTokens?.Amount7D+data?.totalDelegatedTokens?.AmountNow]/3)*0.98],
    dataLabelFontSize: '0.9rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});

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

export function TotalDelegatedGRTIndexers(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', title: 'Total Staked GRT by Indexers', titleFontSize: '2rem',seriesName: 'Total Staked GRT by Indexers',subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalTokensStaked?.Amount28D, data?.totalTokensStaked?.Amount7D, data?.totalTokensStaked?.AmountNow],
    tickInterval : ([data?.totalTokensStaked?.Amount28D+data?.totalTokensStaked?.Amount7D+data?.totalTokensStaked?.AmountNow]/400),
    min: [([data?.totalTokensStaked?.Amount28D+data?.totalTokensStaked?.Amount7D+data?.totalTokensStaked?.AmountNow]/3)*0.985],
    dataLabelFontSize: '0.9rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});

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

export function TotalQueryFees(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 85, marginRight: 80,type: 'column', title: 'Total Query Fees (GRT)', titleFontSize: '2rem', seriesName: 'Total Query Fees (GRT)',subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalQueryFees?.Amount28D, data?.totalQueryFees?.Amount7D, data?.totalQueryFees?.AmountNow],
    tickInterval : ([data?.totalQueryFees?.Amount28D+data?.totalQueryFees?.Amount7D+data?.totalQueryFees?.AmountNow]/50),
    min: [([data?.totalQueryFees?.Amount28D+data?.totalQueryFees?.Amount7D+data?.totalQueryFees?.AmountNow]/3)*0.85],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});

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


export function TotalTokensSignalled(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 80, marginRight: 80,type: 'column', title: 'Total Signalled GRT by Curators', titleFontSize: '2rem',seriesName: 'Total Signalled GRT by Curators',subtitleFontSize: '0.8rem',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalTokensSignalled?.Amount28D, data?.totalTokensSignalled?.Amount7D, data?.totalTokensSignalled?.AmountNow],
    tickInterval : ([data?.totalTokensSignalled?.Amount28D+data?.totalTokensSignalled?.Amount7D+data?.totalTokensSignalled?.AmountNow]/200),
    min: [([data?.totalTokensSignalled?.Amount28D+data?.totalTokensSignalled?.Amount7D+data?.totalTokensSignalled?.AmountNow]/3)*0.98],
    dataLabelFontSize: '1rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0,
    dataLogoX: 0, dataLogoY: 0, dataLogoWidth: 0, dataLogoHeight: 0, height: '40%'});

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

export function TotalStakedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange();

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 85, marginRight: 80,type: 'column', title: 'Total Staked GRT', titleFontSize: '2rem',seriesName: 'Total Staked GRT',
    categories: [lastMonth, lastWeek, Now], subtitleFontSize: '0.8rem',
    data : [data?.totalTokensAllocated?.Amount28D, data?.totalTokensAllocated?.Amount7D, data?.totalTokensAllocated?.AmountNow],
    tickInterval : ([data?.totalTokensAllocated?.Amount28D+data?.totalTokensAllocated?.Amount7D+data?.totalTokensAllocated?.AmountNow]/100),
    min: [([data?.totalTokensAllocated?.Amount28D+data?.totalTokensAllocated?.Amount7D+data?.totalTokensAllocated?.AmountNow]/3)*0.94],
    dataLabelFontSize: '0.9rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0, height: '40%'});

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

export function TotalBurnedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange();

  const options = useColumnGraphOptionsBuilder(
    {marginLeft: 85, marginRight: 80,type: 'column', title: 'Total GRT Burned', titleFontSize: '2rem',seriesName: 'Total GRT Burned',
    categories: [lastMonth, lastWeek, Now], subtitleFontSize: '0.8rem',
    data : [data?.totalGRTBurned?.Amount28D, data?.totalGRTBurned?.Amount7D, data?.totalGRTBurned?.AmountNow],
    tickInterval : ([data?.totalGRTBurned?.Amount28D+data?.totalGRTBurned?.Amount7D+data?.totalGRTBurned?.AmountNow]/200),
    min: [([data?.totalGRTBurned?.Amount28D+data?.totalGRTBurned?.Amount7D+data?.totalGRTBurned?.AmountNow]/3)*0.98],
    dataLabelFontSize: '0.9rem',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 25,
    logoX: 0, logoY: 0, logoWidth: 0, logoHeight:0, height: '40%'});

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

// Chatbot data 
export function ChatBotActiveDelegatorCountBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.activeDelegatorCount?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.activeDelegatorCount?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function ActiveDelegatorCountData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/ActiveDelegatorCount" target="_blank" rel="noreferrer">Active Delegator Count</a> is  <NumberFormat value={data?.activeDelegatorCount?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
  
    </div>
  );
}

export function ChatBotActiveDelegationCountBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.activeDelegationCount?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.activeDelegationCount?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function ActiveDelegationCountData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/ActiveDelegationCount" target="_blank" rel="noreferrer">Active Delegation Count</a> is <NumberFormat value={data?.activeDelegationCount?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}

export function ChatBotHoldersCountBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.holdersCount?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.holdersCount?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function HoldersCountData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/HoldersCount" target="_blank" rel="noreferrer">Holders Count</a> is <NumberFormat value={data?.holdersCount?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}

export function ChatBotSubgraphsCountBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.subgraphCount?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.subgraphCount?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function SubgraphsCountData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/SubgraphsCount" target="_blank" rel="noreferrer">Subgraph Count</a> is <NumberFormat value={data?.subgraphCount?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}
export function ChatBotCuratorsCountBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.curatorCount?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.curatorCount?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function CuratorsCountData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/CuratorsCount" target="_blank" rel="noreferrer">Curator Count</a> is <NumberFormat value={data?.curatorCount?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}
export function ChatBotActiveIndexerCountBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.activeIndexersCount?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.activeIndexersCount?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function ActiveIndexerCountData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/ActiveIndexerCount" target="_blank" rel="noreferrer">Active Indexer Count</a> is <NumberFormat value={data?.activeIndexersCount?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}
export function ChatBotTotalGRTDelegatedByDelegatorsBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.totalDelegatedTokens?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.totalDelegatedTokens?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function TotalGRTDelegatedByDelegatorsData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/TotalGRTDelegatedByDelegators" target="_blank" rel="noreferrer">Total GRT Delegated by Delegators</a> is <NumberFormat value={data?.totalDelegatedTokens?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}
export function ChatBotTotalQueryFeesCountBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.totalQueryFees?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.totalQueryFees?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function TotalQueryFeesCountData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/TotalQueryFeesCount" target="_blank" rel="noreferrer">Total Query Fees (GRT)</a> is <NumberFormat value={data?.totalQueryFees?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}
export function ChatBotTotalGRTSignalledByCuratorsBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.totalTokensSignalled?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.totalTokensSignalled?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function TotalGRTSignalledByCuratorsData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/TotalGRTSignalledByCurators" target="_blank" rel="noreferrer">Total GRT Signalled by Curators</a> is <NumberFormat value={data?.totalTokensSignalled?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}
export function ChatBotTotalStakedGRTCountBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.totalTokensAllocated?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.totalTokensAllocated?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function TotalStakedGRTCountData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/TotalStakedGRTCount" target="_blank" rel="noreferrer">Total Staked GRT Count</a> is <NumberFormat value={data?.totalTokensAllocated?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}
export function ChatBotTotalDelegatedGRTByIndexersCountBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.totalTokensStaked?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.totalTokensStaked?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function TotalDelegatedGRTByIndexersCountData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/TotalDelegatedGRTByIndexersCount" target="_blank" rel="noreferrer">Total Delegated GRT by Indexers</a> is <NumberFormat value={data?.totalTokensStaked?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}
export function ChatBotTotalGRTBurnedCountBar(){    
  const { data } = useBarAPI();
  console.log('testing:',data?.totalGRTBurned?.AmountNow);
  return(
      <p className="chatbot-data"><NumberFormat value={data?.totalGRTBurned?.AmountNow} displayType={'text'} thousandSeparator={true}/></p>
  );
}

export function TotalGRTBurnedCountData(){    
  const { data } = useBarAPI();
  
  return(
    <div>
    <h4><a className="cla" href="https://grtdatahub.com/TotalGRTBurnedCount" target="_blank" rel="noreferrer">Total Amount of GRT Burned</a> is <NumberFormat value={data?.totalGRTBurned?.AmountNow} displayType={'text'} thousandSeparator={true}/>.</h4>
    
    </div>
  );
}

