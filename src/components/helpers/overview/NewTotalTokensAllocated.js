import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewTotalTokensAllocated() {
  const [totalTokensAllocated, setTotalTokensAllocated] = useState(0);

  useEffect(() => {
    const fetchTotalTokensAllocated = async () => {
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
        setTotalTokensAllocated(response.data.data.graphNetworks[0].totalTokensAllocated);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalTokensAllocated();
  }, []);

// large numbers
  return <div><h4>Total Tokens Allocated<br></br><NumberFormat value={totalTokensAllocated/1000000000000000000} displayType={'text'} thousandSeparator={true} decimalScale={false} decimalSeparator={false}/> GRT</h4></div>;

}

export default NewTotalTokensAllocated;