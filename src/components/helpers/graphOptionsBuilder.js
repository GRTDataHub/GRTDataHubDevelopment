import Highcharts from 'highcharts';

Highcharts.SVGRenderer.prototype.symbols.download = function (x, y, w, h) {
  var path = [
      // Arrow stem
      'M', x + w * 0.5, y,
      'L', x + w * 0.5, y + h * 0.7,
      // Arrow head
      'M', x + w * 0.3, y + h * 0.5,
      'L', x + w * 0.5, y + h * 0.7,
      'L', x + w * 0.7, y + h * 0.5,
      // Box
      'M', x, y + h * 0.9,
      'L', x, y + h,
      'L', x + w, y + h,
      'L', x + w, y + h * 0.9
  ];
  return path;
};

Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});

export function useColumnGraphOptionsBuilder({marginLeft, marginRight,  marginTop, marginBottom, titleY, type, title, titleFontSize,subtitleFontSize, categories, data, tickInterval, min, dataLabelFontSize, dataLabelX, seriesName, subtitleX, subtitleY, downloadButton, width,
  // logoX, logoY, logoWidth, logoHeight, ,
  height}){
    const options = {
        chart: {
          height: height,
          // events: {
          //   verticalAlign: 'top',
          //   render: function() {
          //     this.renderer.image(GraphtronautsLogo, logoX, logoY, logoWidth, logoHeight)
          //       .add();
          //   }
          // },
         
          marginLeft: marginLeft,
              marginRight: marginRight,
              marginBottom: marginBottom,
              marginTop: marginTop,
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
          type : type
        },
        title: {style: {
          color: '#d8d2e4',
          fontWeight: 'bold',
          fontSize: titleFontSize,
       },
          text : title,
          align: 'center',
          y: titleY,
        },
        subtitle: {
          style: {
              color: '#8a8098',
              fontSize: subtitleFontSize,
           },
           text: 'www.GRTDataHub.com',
          align: 'center',
          x: subtitleX,
          y: subtitleY,
          verticalAlign: 'bottom',
          },
        accessibility: {
          announceNewData: {
              enabled: true
          }
      },
        yAxis: {
          tickInterval: tickInterval,
          min: min,
          title: {
            text: false,
        },
            labels: 
            {
              formatter: function() {
                if ( this.value > 999999999 ) return Highcharts.numberFormat( this.value/1000000000, 1) + " B";
                if ( this.value > 999999 ) return Highcharts.numberFormat( this.value/1000000, 1) + " M"; 
                if ( this.value > 999 ) return Highcharts.numberFormat( this.value/1000, 1) + " K"; 
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
          width: width,
          categories: categories,
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
          },  name: seriesName,
          color: {
      linearGradient: { x1: 0,y1: 0 ,x2: 0 ,y2: 0.9 },
      // start position (x1, y1) and the end position (x2, y2) relative to the shape, where 0 is top/left and 1 is bottom/right.
      stops: [
          [0, Highcharts.color('#6D49FB').brighten(0).get('rgb')],
            [1, Highcharts.color('#09091F').setOpacity(0).get('rgba')]
      ]
          },
              data: [data[0], data[1], data[2]],
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
                      y: 35,
                      x: dataLabelX,
                      enabled: true,
                      crop: false,
                      overflow: 'none',
                      color: 'white',
                      borderWidth: 2,
                      style: {
                        fontSize: dataLabelFontSize,
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
          className: downloadButton,
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
    return options;
}

export function getLineGraphOptionsBuilder({chartType, title, titleFontSize, xAxisType, data, seriesName, marginLeft, marginRight, marginBottom, marginTop, subtitleFontSize, dataLabelFontSize, subtitleX, subtitleY, titleY, tickInterval, min, downloadButton, width,
  // logoX, logoY, logoWidth, logoHeight, 
  height}){
  const options = {
    chart : {
      height: height,
      // events: {
      //   verticalAlign: 'top',
      //   render: function() {
      //     this.renderer.image(GraphtronautsLogo, logoX, logoY, logoWidth, logoHeight)
      //       .add();
      //   }
      // },
      type : chartType,
      zoomType :'x',
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginBottom: marginBottom,
      marginTop: marginTop,
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
      }
    },
      tooltip: {
        shared: true
        }, credits: {
        position: {
        x: 30,
        y: 50,
        }
        },
        legend: {
        enabled: false,     
        }, 
    title: {
      style: {
        color: '#d8d2e4',
        fontWeight: 'bold',
        fontSize: titleFontSize,
      },
      text: title,
      align: 'center',
      y: titleY,
    },
    subtitle: {
      style: {
          color: '#8a8098',
          fontSize: subtitleFontSize,
       },
       text: 'www.GRTDataHub.com',
      align: 'center',
      x: subtitleX,
      y: subtitleY,
      verticalAlign: 'bottom',
      },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
    xAxis: [{
      width: width,
      type: xAxisType,
      min: min,
      dateTimeLabelFormats: {
        month: '%e. %b',
        year: '%b'
      },
      labels: { formatter: function () {
                      return Highcharts.dateFormat('%e %b %y',this.value);
      },
    style: {fontSize: '1rem',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#d8d2e4',
      stops:
      [0, Highcharts.color('#1B0E34').brighten(0.2).get('rgb')],
    },
},
crosshair: true,
}],
yAxis: [{
  tickInterval: tickInterval,
    title: {
      x: -200,
      style: {
        textAlign: 'center',
        color: '#d8d2e4',
        borderRadius: 3,
  borderColor: '#6D49FB', 
  borderWidth: 2,
      }
    },
    labels: {
          formatter: function() {
            if ( this.value > 999999999 ) return Highcharts.numberFormat( this.value/1000000000, 1) + " B";
            if ( this.value > 999999 ) return Highcharts.numberFormat( this.value/1000000, 2) + " M"; 
            if ( this.value > 999 ) return Highcharts.numberFormat( this.value/1000, 0) + " K"; 
            return Highcharts.numberFormat(this.value,0)},
            format: '{value}',
      style: {fontSize: '1.25rem',
        textAlign: 'center',
    stops:
    [0, Highcharts.color('#d8d2e4').brighten(0.2).get('rgb')],
  }
    },
  }],
plotOptions: {
  area: {
    lineWidth: 1.5,
    lineColor: '#d2c7f8',
    marker: {
      enabled: false,
      states: {
        hover: {
          enabled: true,
          radius: 2
        }
      }
    },
    shadow: false,
    states: {
      hover: {
        enabled: true,
        lineWidth: 2
      }
    }
  }
},
exporting: {
  className: downloadButton,
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
,
series: [{
 name : seriesName,
  type: 'area',
  color: {
    linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
    stops: [
      [0, Highcharts.color('#6D49FB').brighten(0).get('rgb')],
      [1, Highcharts.color('#09091F').setOpacity(0.8).get('rgba')]
    ]},
    data : data,
},
]}
return options;
};

