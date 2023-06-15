import { useState, useEffect } from "react";
import '../../../App.css';
import axios from "axios";
import { createQueryFactory } from "../graphQLQuery";
import { URLS } from "../config-urls";
import { getDaysInRange } from '../dateParser';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function NewTotalIndexerQueryFeesCollectedBarChartsData() {
  const [dataNow, setDataNow] = useState(0);
  const [data7Days, setData7Days] = useState(0);
  const [data28Days, setData28Days] = useState(0);
  useEffect(() => {
    const fetchDataNow = async () => {
      try {        
        const queryParams = {
          queryName : 'graphNetworkDailyDatas',
          parameters : 'first: 1, orderBy: dayStart, orderDirection: desc',
          body : 'totalIndexerQueryFeesCollected'

          // totalDelegatorQueryFeeRebates
          // totalIndexerQueryFeeRebates
          // totalIndexingDelegatorRewards
          // totalIndexingIndexerRewards
          // totalIndexingRewards
          // totalUnclaimedQueryFeeRebates
          // totalUnstakedTokensLocked

        };

        const queryBuilder = createQueryFactory(queryParams);
        

        const res = await axios.post(URLS.GRAPH_QL_ANALYTICS,
        { 
          query :queryBuilder
        });
        setDataNow(res.data.data.graphNetworkDailyDatas[0].totalIndexerQueryFeesCollected/1000000000000000000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataNow();
  }, []);

  useEffect(() => {
    const fetchData7Days = async () => {
      try {        
        const queryParams = {
          queryName : 'graphNetworkDailyDatas',
          parameters : 'first: 7, orderBy: dayStart, orderDirection: desc,',
          body : 'totalIndexerQueryFeesCollected'
        };

        const queryBuilder = createQueryFactory(queryParams);
        

        const res = await axios.post(URLS.GRAPH_QL_ANALYTICS,
        { 
          query :queryBuilder
        });
        setData7Days(res.data.data.graphNetworkDailyDatas[6].totalIndexerQueryFeesCollected/1000000000000000000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData7Days();
  }, []);

  useEffect(() => {
    const fetchData28Days = async () => {
      try {        
        const queryParams = {
          queryName : 'graphNetworkDailyDatas',
          parameters : 'first: 28, orderBy: dayStart, orderDirection: desc',
          body : 'totalIndexerQueryFeesCollected'
        };

        const queryBuilder = createQueryFactory(queryParams);
        

        const res = await axios.post(URLS.GRAPH_QL_ANALYTICS,
        { 
          query :queryBuilder
        });
        setData28Days(res.data.data.graphNetworkDailyDatas[27].totalIndexerQueryFeesCollected/1000000000000000000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData28Days();
  }, []);

  const [lastMonth, lastWeek, Now] = getDaysInRange(28,7);

  const options = {
    chart: {
      height: '60%',
      // events: {
      //   verticalAlign: 'top',
      //   render: function() {
      //     this.renderer.image(GraphtronautsLogo, logoX, logoY, logoWidth, logoHeight)
      //       .add();
      //   }
      // },
          backgroundColor: {
              radialGradient: {
                    cx: 0.5,
                    cy: 0.5,
                    r: 0.75
                },
                stops: [
                    [0, Highcharts.color('#1B0D33').brighten(0.1).get('rgb')],
                    [1, Highcharts.color('#09091F').get('rgb')] // darken
                ]
    },
    type: 'column',
    },
    title: {style: {
      color: '#d8d2e4',
      fontWeight: 'bold',
      fontSize: '2rem'
   },
      text : 'Total Indexer Query Fees Collected',
      align: 'center',
      y: 30,
    },
    subtitle: {
      style: {
          color: '#8a8098',
          fontSize: '0.8rem',
       },
       text: 'www.GRTDataHub.com',
      align: 'center',
      subtitleX: 0,
      subtitleY: 25,
      verticalAlign: 'bottom',
      },
    accessibility: {
      announceNewData: {
          enabled: true
      }
  },
    yAxis: {
      tickInterval: ([dataNow+data7Days+data28Days]/400),
      min: [([dataNow+data7Days+data28Days]/3)*0.96],
      title: {
        text: false,
    },
        labels: 
        {
          formatter: function() {
            if ( this.value > 999999999 ) return Highcharts.numberFormat( this.value/1000000000, 2) + " B";
            if ( this.value > 999999 ) return Highcharts.numberFormat( this.value/1000000, 2) + " M"; 
            if ( this.value > 999 ) return Highcharts.numberFormat( this.value/1000, 2) + " K"; 
            return Highcharts.numberFormat(this.value,0)},
            format: '{value}',
            style: {fontSize: '1rem',
                  textAlign: 'center',
              stops:
              [0, Highcharts.color('#d8d2e4').brighten(0.2).get('rgb')],
            }
        }
    },
    xAxis: {
      // width: '65%',
      categories: [lastMonth, lastWeek, Now],
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%d %b %Y',this.value);
        },
                  style: {fontSize: '0.9rem',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#d8d2e4',
                    stops:
                    [0, Highcharts.color('#1B0E34').brighten(0.2).get('rgb')],
                  }
              },
      title: {
        text: false,
      }, crosshair: false, 
    },
    series: 
    [
      {formatter: function() {
        return Highcharts.dateFormat('%d %b %Y',this.value);
      },  name: 'Total Indexer Query Fees Collected',
      color: {
  linearGradient: { x1: 0,y1: 0 ,x2: 0 ,y2: 0.9 },
  // start position (x1, y1) and the end position (x2, y2) relative to the shape, where 0 is top/left and 1 is bottom/right.
  stops: [
      [0, Highcharts.color('#6D49FB').brighten(0).get('rgb')],
        [1, Highcharts.color('#09091F').setOpacity(0).get('rgba')]
  ]
      },
          data: [data28Days, data7Days, dataNow],
      },
    ],
    credits: { style: {
      display: 'none',
   },
  },
  legend: {
    enabled: false,     
        },
        plotOptions: {
          column: { 
            dataLabels: {
              format: '{y:.0f}',
                  y: 35,
                  x: 0,
                  enabled: true,
                  crop: false,
                  overflow: 'none',
                  color: 'white',
                  borderWidth: 2,
                  style: {
                    fontSize:'0.8rem',
                  },
              },
              borderRadius: 3,
              borderColor: '#6D49FB', 
              borderWidth: 2,
          }
      },
      tooltip: {
        hideDelay: 200,
        formatter: function() {
            return '<b>' + this.y + ' </b>' + this.series.name + ' on <b>' + Highcharts.dateFormat('%d %b %Y',this.x) + '</b>.';
        }
    },
    exporting: {
      className: 'barMobileOne',
      enabled: true,
      buttons: {
        contextButton: {
          text: 'Download',
          fill: '#22143B',
          symbol: 'download',
          menuItems: null,
          onclick: function () {
              this.exportChart();
          },
          theme: {
            fill: 'white',
            states: {
                hover: {
                    fill: 'transparent',
                    stroke: 'white',
                },
                  }
              }
          }
      }
    }
}

  return <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  </div>;
}

export default NewTotalIndexerQueryFeesCollectedBarChartsData;
