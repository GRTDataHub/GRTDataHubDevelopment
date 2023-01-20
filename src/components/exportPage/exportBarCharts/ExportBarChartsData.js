import React from 'react';
import '../../../App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { getDaysInRange } from '../../helpers/dateParser';
import { REQUEST_STATUS, useBarAPI } from '../../../hooks/useGraphAPI';
import { useColumnGraphOptionsBuilder} from '../../helpers/graphOptionsBuilder';

function AdminActiveDelegatorCountBar(){
  require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);

  //this will go off and get our data for us as this is our custom hook to get api data. from here we can access data
  //acces the request status so if it successful or not and if there is an err msg. will automatically get data on refresh for you
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  //configure options for the graph, another custom hook returns the obj that we pass to create graph
  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100, marginLeft: 90, marginRight: 90,type: 'column', title: 'Active Delegators', titleFontSize: '2.5rem',seriesName: 'Active Delegators', subtitleFontSize: '2vh',
    yAxis : 'Tokens', xAxis: 'Date', 
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeDelegatorCount?.Amount28D, data?.activeDelegatorCount?.Amount7D, data?.activeDelegatorCount?.AmountNow],
    tickInterval : ([data?.activeDelegatorCount?.Amount28D+data?.activeDelegatorCount?.Amount7D+data?.activeDelegatorCount?.AmountNow]/100),
    min: [([data?.activeDelegatorCount?.Amount28D+data?.activeDelegatorCount?.Amount7D+data?.activeDelegatorCount?.AmountNow]/3)*0.95],
    dataLabelFontSize: '3.5vh',
    dataLabelX: 15,
    subtitleX: 0,
    subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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
};

export default AdminActiveDelegatorCountBar;

export function AdminHoldersCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100, marginLeft: 90, marginRight: 80,type: 'column', title: 'Holders', titleFontSize: '2.5rem',seriesName: 'Holders',subtitleFontSize: '2vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.holdersCount?.Amount28D, data?.holdersCount?.Amount7D, data?.holdersCount?.AmountNow],
    tickInterval : ([data?.holdersCount?.Amount28D+data?.holdersCount?.Amount7D+data?.holdersCount?.AmountNow]/80),
    min: [([data?.holdersCount?.Amount28D+data?.holdersCount?.Amount7D+data?.holdersCount?.AmountNow]/3)*0.93],
    dataLabelFontSize: '3vh',
    dataLabelX: 15,
    subtitleX: 0,
    subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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

export function AdminSubgraphCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Subgraphs', titleFontSize: '2.5rem',seriesName:'Subgraphs',subtitleFontSize: '2vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.subgraphCount?.Amount28D, data?.subgraphCount?.Amount7D, data?.subgraphCount?.AmountNow],tickInterval : ([data?.subgraphCount?.Amount28D+data?.subgraphCount?.Amount7D+data?.subgraphCount?.AmountNow]/80),
    min: [([data?.subgraphCount?.Amount28D+data?.subgraphCount?.Amount7D+data?.subgraphCount?.AmountNow]/3)*0.9],
    dataLabelFontSize: '3.5vh',
    dataLabelX: 10,
    subtitleX: 0,
    subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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

export function AdminCuratorCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Curators', titleFontSize: '2.5rem',seriesName: 'Curators',subtitleFontSize: '2vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.curatorCount?.Amount28D, data?.curatorCount?.Amount7D, data?.curatorCount?.AmountNow],
    tickInterval : ([data?.curatorCount?.Amount28D+data?.curatorCount?.Amount7D+data?.curatorCount?.AmountNow]/400),
    min: [([data?.curatorCount?.Amount28D+data?.curatorCount?.Amount7D+data?.curatorCount?.AmountNow]/3)*0.99],
    dataLabelFontSize: '3.5vh',
    dataLabelX: 10,
    subtitleX: 0,
    subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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

export function AdminActiveDelegationCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Active Delegation Count', titleFontSize: '2.5rem',seriesName: 'Active Delegation Count',subtitleFontSize: '2vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeDelegationCount?.Amount28D, data?.activeDelegationCount?.Amount7D, data?.activeDelegationCount?.AmountNow],
    tickInterval : ([data?.activeDelegationCount?.Amount28D+data?.activeDelegationCount?.Amount7D+data?.activeDelegationCount?.AmountNow]/200),
    min: [([data?.activeDelegationCount?.Amount28D+data?.activeDelegationCount?.Amount7D+data?.activeDelegationCount?.AmountNow]/3)*0.97],
    dataLabelFontSize: '3.5vh',
    dataLabelX: 15,
    subtitleX: 0,
    subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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

export function AdminActiveIndexersCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Active Indexers', titleFontSize: '2.5rem',seriesName: 'Active Indexers',subtitleFontSize: '2vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeIndexersCount?.Amount28D, data?.activeIndexersCount?.Amount7D, data?.activeIndexersCount?.AmountNow],
    tickInterval : ([data?.activeIndexersCount?.Amount28D+data?.activeIndexersCount?.Amount7D+data?.activeIndexersCount?.AmountNow]/20),
    min: [([data?.activeIndexersCount?.Amount28D+data?.activeIndexersCount?.Amount7D+data?.activeIndexersCount?.AmountNow]/3)*0.5],
    dataLabelFontSize: '3.5vh',
    dataLabelX: 10,
    subtitleX: 0,
    subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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

export function AdminTotalDelegatedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Total Delegated GRT by Delegators', titleFontSize: '2.5rem',seriesName: 'Total Delegated GRT by Delegators',subtitleFontSize: '2vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalDelegatedTokens?.Amount28D, data?.totalDelegatedTokens?.Amount7D, data?.totalDelegatedTokens?.AmountNow],
    tickInterval : ([data?.totalDelegatedTokens?.Amount28D+data?.totalDelegatedTokens?.Amount7D+data?.totalDelegatedTokens?.AmountNow]/500),
    min: [([data?.totalDelegatedTokens?.Amount28D+data?.totalDelegatedTokens?.Amount7D+data?.totalDelegatedTokens?.AmountNow]/3)*0.98],
    dataLabelFontSize: '2.75vh',
    dataLabelX: 30,
    subtitleX: 0,
    subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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

export function AdminTotalDelegatedGRTIndexers(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Total Staked GRT by Indexers', titleFontSize: '2.5rem',seriesName: 'Total Staked GRT by Indexers',subtitleFontSize: '2vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalTokensStaked?.Amount28D, data?.totalTokensStaked?.Amount7D, data?.totalTokensStaked?.AmountNow],
    tickInterval : ([data?.totalTokensStaked?.Amount28D+data?.totalTokensStaked?.Amount7D+data?.totalTokensStaked?.AmountNow]/20),
    min: [([data?.totalTokensStaked?.Amount28D+data?.totalTokensStaked?.Amount7D+data?.totalTokensStaked?.AmountNow]/3)*0.7],
    dataLabelFontSize: '2.75vh',
    dataLabelX: 30,
    subtitleX: 0,
    subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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

export function AdminTotalQueryFees(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Total Query Fees (GRT)', titleFontSize: '2.5rem',seriesName: 'Total Query Fees (GRT)',subtitleFontSize: '2vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalQueryFees?.Amount28D, data?.totalQueryFees?.Amount7D, data?.totalQueryFees?.AmountNow],
    tickInterval : ([data?.totalQueryFees?.Amount28D+data?.totalQueryFees?.Amount7D+data?.totalQueryFees?.AmountNow]/50),
    min: [([data?.totalQueryFees?.Amount28D+data?.totalQueryFees?.Amount7D+data?.totalQueryFees?.AmountNow]/3)*0.85],
    dataLabelFontSize: '3.5vh',
    dataLabelX: 20,
    subtitleX: 0,
    subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70,height: '80%'
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


export function AdminTotalTokensSignalled(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Total Signalled GRT by Curators', titleFontSize: '2.5rem',seriesName: 'Total Signalled GRT by Curators',subtitleFontSize: '2vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalTokensSignalled?.Amount28D, data?.totalTokensSignalled?.Amount7D, data?.totalTokensSignalled?.AmountNow],
    tickInterval : ([data?.totalTokensSignalled?.Amount28D+data?.totalTokensSignalled?.Amount7D+data?.totalTokensSignalled?.AmountNow]/200),
    min: [([data?.totalTokensSignalled?.Amount28D+data?.totalTokensSignalled?.Amount7D+data?.totalTokensSignalled?.AmountNow]/3)*0.97],
    dataLabelFontSize: '3.5vh',
    dataLabelX: 25,
    subtitleX: 0,
    subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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

export function AdminTotalStakedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange();

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 110, marginRight: 80,type: 'column', title: 'Total Staked GRT', titleFontSize: '2.5rem',seriesName: 'Total Staked GRT',
    categories: [lastMonth, lastWeek, Now], subtitleFontSize: '2vh',
    data : [data?.totalTokensAllocated?.Amount28D, data?.totalTokensAllocated?.Amount7D, data?.totalTokensAllocated?.AmountNow],
    tickInterval : ([data?.totalTokensAllocated?.Amount28D+data?.totalTokensAllocated?.Amount7D+data?.totalTokensAllocated?.AmountNow]/100),
    min: [([data?.totalTokensAllocated?.Amount28D+data?.totalTokensAllocated?.Amount7D+data?.totalTokensAllocated?.AmountNow]/3)*0.94],
    dataLabelFontSize: '2.75vh',
    dataLabelX: 30,
    subtitleX: 0,
   subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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

export function AdminTotalBurnedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange();

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 110, marginRight: 80,type: 'column', title: 'Total Burned GRT', titleFontSize: '2.5rem',seriesName: 'Total Burned GRT',
    categories: [lastMonth, lastWeek, Now], subtitleFontSize: '2vh',
    data : [data?.totalGRTBurned?.Amount28D, data?.totalGRTBurned?.Amount7D, data?.totalGRTBurned?.AmountNow],
    tickInterval : ([data?.totalGRTBurned?.Amount28D+data?.totalGRTBurned?.Amount7D+data?.totalGRTBurned?.AmountNow]/200),
    min: [([data?.totalGRTBurned?.Amount28D+data?.totalGRTBurned?.Amount7D+data?.totalGRTBurned?.AmountNow]/3)*0.98],
    dataLabelFontSize: '2.75vh',
    dataLabelX: 20,
    subtitleX: 0,
   subtitleY: 25,
    // logoX: 1250, logoY: 11, logoWidth: 70, logoHeight: 70, height: '80%'
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









// Mobile

export function MobileAdminActiveDelegatorCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100, marginLeft: 90, marginRight: 90,type: 'column', title: 'Active Delegators', titleFontSize: '2.5rem',seriesName: 'Active Delegators', subtitleFontSize: '4vh',
    yAxis : 'Tokens', xAxis: 'Date', 
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeDelegatorCount?.Amount28D, data?.activeDelegatorCount?.Amount7D, data?.activeDelegatorCount?.AmountNow],
    tickInterval : ([data?.activeDelegatorCount?.Amount28D+data?.activeDelegatorCount?.Amount7D+data?.activeDelegatorCount?.AmountNow]/100),
    min: [([data?.activeDelegatorCount?.Amount28D+data?.activeDelegatorCount?.Amount7D+data?.activeDelegatorCount?.AmountNow]/3)*0.95],
    dataLabelFontSize: '5vh',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 20,
    // logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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

export function MobileAdminHoldersCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100, marginLeft: 90, marginRight: 80,type: 'column', title: 'Holders', titleFontSize: '2.5rem',seriesName: 'Holders',subtitleFontSize: '4vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.holdersCount?.Amount28D, data?.holdersCount?.Amount7D, data?.holdersCount?.AmountNow],
    tickInterval : ([data?.holdersCount?.Amount28D+data?.holdersCount?.Amount7D+data?.holdersCount?.AmountNow]/80),
    min: [([data?.holdersCount?.Amount28D+data?.holdersCount?.Amount7D+data?.holdersCount?.AmountNow]/3)*0.93],
    dataLabelFontSize: '5vh',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 20,
    // logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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

export function MobileAdminSubgraphCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Subgraphs', titleFontSize: '2.5rem',seriesName:'Subgraphs',subtitleFontSize: '4vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.subgraphCount?.Amount28D, data?.subgraphCount?.Amount7D, data?.subgraphCount?.AmountNow],tickInterval : ([data?.subgraphCount?.Amount28D+data?.subgraphCount?.Amount7D+data?.subgraphCount?.AmountNow]/80),
    min: [([data?.subgraphCount?.Amount28D+data?.subgraphCount?.Amount7D+data?.subgraphCount?.AmountNow]/3)*0.9],
    dataLabelFontSize: '5vh',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 20,
    // logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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

export function MobileAdminCuratorCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Curators', titleFontSize: '2.5rem',seriesName: 'Curators',subtitleFontSize: '4vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.curatorCount?.Amount28D, data?.curatorCount?.Amount7D, data?.curatorCount?.AmountNow],
    tickInterval : ([data?.curatorCount?.Amount28D+data?.curatorCount?.Amount7D+data?.curatorCount?.AmountNow]/400),
    min: [([data?.curatorCount?.Amount28D+data?.curatorCount?.Amount7D+data?.curatorCount?.AmountNow]/3)*0.99],
    dataLabelFontSize: '5vh',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 20,
    // logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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

export function MobileAdminActiveDelegationCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Active Delegation Count', titleFontSize: '2.5rem',seriesName: 'Active Delegation Count',subtitleFontSize: '4vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeDelegationCount?.Amount28D, data?.activeDelegationCount?.Amount7D, data?.activeDelegationCount?.AmountNow],
    tickInterval : ([data?.activeDelegationCount?.Amount28D+data?.activeDelegationCount?.Amount7D+data?.activeDelegationCount?.AmountNow]/200),
    min: [([data?.activeDelegationCount?.Amount28D+data?.activeDelegationCount?.Amount7D+data?.activeDelegationCount?.AmountNow]/3)*0.97],
    dataLabelFontSize: '5vh',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 20,
    // logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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

export function MobileAdminActiveIndexersCountBar(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Active Indexers', titleFontSize: '2.5rem',seriesName: 'Active Indexers',subtitleFontSize: '4vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.activeIndexersCount?.Amount28D, data?.activeIndexersCount?.Amount7D, data?.activeIndexersCount?.AmountNow],
    tickInterval : ([data?.activeIndexersCount?.Amount28D+data?.activeIndexersCount?.Amount7D+data?.activeIndexersCount?.AmountNow]/20),
    min: [([data?.activeIndexersCount?.Amount28D+data?.activeIndexersCount?.Amount7D+data?.activeIndexersCount?.AmountNow]/3)*0.5],
    dataLabelFontSize: '5vh',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 20,
    // logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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

export function MobileAdminTotalDelegatedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Total Delegated GRT by Delegators', titleFontSize: '2.5rem',seriesName: 'Total Delegated GRT by Delegators',subtitleFontSize: '4vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalDelegatedTokens?.Amount28D, data?.totalDelegatedTokens?.Amount7D, data?.totalDelegatedTokens?.AmountNow],
    tickInterval : ([data?.totalDelegatedTokens?.Amount28D+data?.totalDelegatedTokens?.Amount7D+data?.totalDelegatedTokens?.AmountNow]/500),
    min: [([data?.totalDelegatedTokens?.Amount28D+data?.totalDelegatedTokens?.Amount7D+data?.totalDelegatedTokens?.AmountNow]/3)*0.98],
    dataLabelFontSize: '4vh',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 20,
    // logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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

export function MobileAdminTotalDelegatedGRTIndexers(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Total Staked GRT by Indexers', titleFontSize: '2.5rem',seriesName: 'Total Staked GRT by Indexers',subtitleFontSize: '4vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalTokensStaked?.Amount28D, data?.totalTokensStaked?.Amount7D, data?.totalTokensStaked?.AmountNow],
    tickInterval : ([data?.totalTokensStaked?.Amount28D+data?.totalTokensStaked?.Amount7D+data?.totalTokensStaked?.AmountNow]/20),
    min: [([data?.totalTokensStaked?.Amount28D+data?.totalTokensStaked?.Amount7D+data?.totalTokensStaked?.AmountNow]/3)*0.7],
    dataLabelFontSize: '4vh',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 20,
    // logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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

export function MobileAdminTotalQueryFees(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Total Query Fees (GRT)', titleFontSize: '2.5rem',seriesName: 'Total Query Fees (GRT)',subtitleFontSize: '4vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalQueryFees?.Amount28D, data?.totalQueryFees?.Amount7D, data?.totalQueryFees?.AmountNow],
    tickInterval : ([data?.totalQueryFees?.Amount28D+data?.totalQueryFees?.Amount7D+data?.totalQueryFees?.AmountNow]/50),
    min: [([data?.totalQueryFees?.Amount28D+data?.totalQueryFees?.Amount7D+data?.totalQueryFees?.AmountNow]/3)*0.85],
    dataLabelFontSize: '5vh',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 20,
    // logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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


export function MobileAdminTotalTokensSignalled(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 90, marginRight: 80,type: 'column', title: 'Total Signalled GRT by Curators', titleFontSize: '2.5rem',seriesName: 'Total Signalled GRT by Curators',subtitleFontSize: '4vh',
    categories: [lastMonth, lastWeek, Now], 
    data : [data?.totalTokensSignalled?.Amount28D, data?.totalTokensSignalled?.Amount7D, data?.totalTokensSignalled?.AmountNow],
    tickInterval : ([data?.totalTokensSignalled?.Amount28D+data?.totalTokensSignalled?.Amount7D+data?.totalTokensSignalled?.AmountNow]/200),
    min: [([data?.totalTokensSignalled?.Amount28D+data?.totalTokensSignalled?.Amount7D+data?.totalTokensSignalled?.AmountNow]/3)*0.97],
    dataLabelFontSize: '5vh',
    dataLabelX: 0,
    subtitleX: 0,
    subtitleY: 20,
    // logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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

export function MobileAdminTotalStakedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange();

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 110, marginRight: 80,type: 'column', title: 'Total Staked GRT', titleFontSize: '2.5rem',seriesName: 'Total Staked GRT',
    categories: [lastMonth, lastWeek, Now], subtitleFontSize: '4vh',
    data : [data?.totalTokensAllocated?.Amount28D, data?.totalTokensAllocated?.Amount7D, data?.totalTokensAllocated?.AmountNow],
    tickInterval : ([data?.totalTokensAllocated?.Amount28D+data?.totalTokensAllocated?.Amount7D+data?.totalTokensAllocated?.AmountNow]/100),
    min: [([data?.totalTokensAllocated?.Amount28D+data?.totalTokensAllocated?.Amount7D+data?.totalTokensAllocated?.AmountNow]/3)*0.94],
    dataLabelFontSize: '4vh',
    dataLabelX: 0,
    subtitleX: 0,
   subtitleY: 20,
  //  logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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

export function MobileAdminTotalBurnedGRT(){
  const { data, requestStatus, error } = useBarAPI();
  const [lastMonth, lastWeek, Now] = getDaysInRange();

  const options = useColumnGraphOptionsBuilder(
    {marginTop: 100,marginLeft: 110, marginRight: 80,type: 'column', title: 'Total Burned GRT', titleFontSize: '2.5rem',seriesName: 'Total Burned GRT',
    categories: [lastMonth, lastWeek, Now], subtitleFontSize: '4vh',
    data : [data?.totalGRTBurned?.Amount28D, data?.totalGRTBurned?.Amount7D, data?.totalGRTBurned?.AmountNow],
    tickInterval : ([data?.totalGRTBurned?.Amount28D+data?.totalGRTBurned?.Amount7D+data?.totalGRTBurned?.AmountNow]/200),
    min: [([data?.totalGRTBurned?.Amount28D+data?.totalGRTBurned?.Amount7D+data?.totalGRTBurned?.AmountNow]/3)*0.98],
    dataLabelFontSize: '4vh',
    dataLabelX: 0,
    subtitleX: 0,
   subtitleY: 20,
  //  logoX: 10, logoY: 11, logoWidth: 65, logoHeight: 65, height: '80%'
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



