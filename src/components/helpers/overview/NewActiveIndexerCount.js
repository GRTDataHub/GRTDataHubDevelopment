import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewActiveIndexersCount() {
  const [stakedIndexersCount, setStakedIndexersCount] = useState(0);

  useEffect(() => {
    const fetchStakedIndexersCount = async () => {
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
        setStakedIndexersCount(response.data.data.graphNetworks[0].stakedIndexersCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStakedIndexersCount();
  }, []);

  return <div><h4>Active Indexers Count<br></br><NumberFormat value={stakedIndexersCount} displayType={'text'} thousandSeparator={true} decimalSeparator={false}/></h4></div>;

}

export default NewActiveIndexersCount;