import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewActiveCuratorCount() {
  const [activeCuratorCount, setActiveCuratorCount] = useState(0);

  useEffect(() => {
    const fetchActiveCuratorCount = async () => {
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
        setActiveCuratorCount(response.data.data.graphNetworks[0].activeCuratorCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchActiveCuratorCount();
  }, []);

  return <div><h4>Active Curator Count<br></br><NumberFormat value={activeCuratorCount} displayType={'text'} thousandSeparator={true} decimalSeparator={false}/></h4></div>;

}

export default NewActiveCuratorCount;