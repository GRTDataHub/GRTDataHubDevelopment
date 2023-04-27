import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewCuratorCount() {
  const [curatorCount, setCuratorCount] = useState(0);

  useEffect(() => {
    const fetchCuratorCount = async () => {
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
        setCuratorCount(response.data.data.graphNetworks[0].curatorCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCuratorCount();
  }, []);

  return <div><h4>Curator Count<br></br><NumberFormat value={curatorCount} displayType={'text'} thousandSeparator={true} decimalSeparator={false}/></h4></div>;
    


}

export default NewCuratorCount;