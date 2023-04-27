import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewSubgraphCount() {
  const [subgraphCount, setSubgraphCount] = useState(0);

  useEffect(() => {
    const fetchSubgraphCount = async () => {
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
        setSubgraphCount(response.data.data.graphNetworks[0].subgraphCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubgraphCount();
  }, []);

  return <div><h4>Subgraph Count<br></br><NumberFormat value={subgraphCount} displayType={'text'} thousandSeparator={true} decimalSeparator={false}/></h4></div>;

}

export default NewSubgraphCount;