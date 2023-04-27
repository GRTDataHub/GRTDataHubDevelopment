import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewTotalDelegatedTokens() {
  const [totalDelegatedTokens, setTotalDelegatedTokens] = useState(0);

  useEffect(() => {
    const fetchTotalDelegatedTokens = async () => {
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
                  
                  currentEpoch
                  delegationUnbondingPeriod
                  
                  totalSupply
                  totalGRTMinted
                  totalGRTBurned
                  
                  totalGRTDeposited
                  totalGRTWithdrawn

                  totalQueryFees
                  
                  
                  
                 
                }
              }`
            
          }
        );
        setTotalDelegatedTokens(response.data.data.graphNetworks[0].totalDelegatedTokens);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalDelegatedTokens();
  }, []);

  // large numbers
  return <div><h4>Total Tokens Delegated<br></br><NumberFormat value={totalDelegatedTokens/1000000000000000000} displayType={'text'} thousandSeparator={true} decimalScale={false} decimalSeparator={false}/> GRT</h4></div>;

}

export default NewTotalDelegatedTokens;