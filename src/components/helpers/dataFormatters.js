export function sortToLineGraphDS({data, objectField}){
  const combinedData = [];
  data.map(sortData);

  function sortData(item){
    const milliseconds = item.dayStart * 1000;
    combinedData.push([milliseconds, item[objectField]]);
  }
  return combinedData;
}