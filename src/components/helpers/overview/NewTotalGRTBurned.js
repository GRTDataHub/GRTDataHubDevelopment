import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewTotalGRTBurned() {
  const [totalGRTBurned, setTotalGRTBurned] = useState(0);

  useEffect(() => {
    const fetchTotalGRTBurned = async () => {
      try {
        const response = await axios.post(
          "https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-mainnet",
          {
            query: 
              `{
                graphNetworks(first: 1, orderBy: epochCount, orderDirection: desc) {
                  
                  curatorCount
                  activeCuratorCount
                  totalTokensSignalled



                  delegatorCount
                  activeDelegatorCount

                  delegationCount
                  activeDelegationCount

                  totalDelegatedTokens
                  
                  

                  indexerCount
                  stakedIndexersCount

                  totalTokensStaked
                  totalTokensAllocated

                  subgraphCount
                  subgraphDeploymentCount
                  activeSubgraphCount
                  
                  

                  delegationUnbondingPeriod
                  
                  currentEpoch
                  totalGRTBurned
                  totalGRTMinted
                  totalGRTWithdrawn
                  totalGRTDeposited
                  totalQueryFees
                  totalSupply
                 
                }
              }`
            
          }
        );
        setTotalGRTBurned(response.data.data.graphNetworks[0].totalGRTBurned);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalGRTBurned();
  }, []);

  return <div><h4>Total GRT Burned<br></br><NumberFormat value={totalGRTBurned/1000000000000000000} displayType={'text'} thousandSeparator={true} decimalScale={false} decimalSeparator={false}/> GRT</h4></div>;

}

export default NewTotalGRTBurned;