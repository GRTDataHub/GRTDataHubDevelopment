import { useState, useEffect } from "react";
import { API_URL_BAR, API_URL_LINE, 

  GRAPH_QL_ANALYTICS, 
  // YOUTUBE_API
 } from '../components/helpers/URLS';
import axios from 'axios';

export const REQUEST_STATUS = {
    LOADING : "Loading",
    SUCCESS : "Success",
    FAILURE : "Failure",
};

export function useBarAPI(){

    const [data, setData] = useState([]);
    const [requestStatus, setRequestStatus] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        async function getData() {
          try{
            await axios.get(API_URL_BAR).then(r => {
              const data = r.data;
              if(data){
                let dobj = {};
                data.forEach((i) => {
                    dobj[i.IdField] = i;
                    delete dobj[i.IdField].IdField;
                });
                setData(dobj);
                setRequestStatus(REQUEST_STATUS.SUCCESS);
              }
            })
          } catch(e){
            console.log('err getting api : ', e);
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError("Error fetching data from API");
          }
        }
        getData();
      },[]);

      return {
          data, requestStatus, error
      }
     

}

// export function useGetLatestYoutubeVideo(){
//   const [latestId, setLatestId] = useState("");
//   useEffect(() => {
//     async function getVideoData(){
//       try{
//         await axios.get(YOUTUBE_API).then(r => {
//           const data = r.data;
//           if(data){
//             const videoId = data?.items[0]?.id?.videoId;
//             console.log(videoId);
//             setLatestId(videoId);
//           };
//         })
//       }catch(e){
//         console.log(e)
//       }
//     }
    
//     getVideoData();
//   }, []);
//   return { latestId };

// }


export function useGraphDataAPI(){
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(500);

  useEffect(() => {

    async function getData(){
      try{
        console.log('getting data ... ')
        await axios.post(GRAPH_QL_ANALYTICS, {
          query: `{
          graphNetworkDailyDatas(orderDirection: asc, orderBy: dayNumber, first: 1000) {
            dayStart
            delegatorCount
            subgraphCount
            indexerCount
            totalDelegatedTokens
            totalTokensAllocated
            totalTokensStaked
            subgraphDeploymentCount
            stakedIndexersCount
}}
          `
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(r => {
          const d = r.data;
          if(d){
            setData(d.data);
            setRequestStatus(REQUEST_STATUS.SUCCESS);
            setStatus(r.status);
            
          }
        });
      } catch(e){
        setError(e)
        setRequestStatus(REQUEST_STATUS.FAILURE)
      }
    }

    getData();
  }, []);

  
  return { 
    data, status, requestStatus, error
  }
}

export function useLineAPI(){

  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
      async function getData() {
        try{
          await axios.get(API_URL_LINE).then(r => {
            const data = r.data;
            if(data){
              let dobj = {};
              data.forEach((i) => {
                  dobj[i.IdField] = i;
                  delete dobj[i.IdField].IdField;
              });
              console.log(' this is the data ', dobj);
              setData(dobj);
              setRequestStatus(REQUEST_STATUS.SUCCESS);
            }
          })
        } catch(e){
          console.log('err getting api : ', e);
          setRequestStatus(REQUEST_STATUS.FAILURE);
          setError("Error fetching data from API");
        }
      }
      getData();
    }, []);

    return {
        data, requestStatus, error
    }
   

}