import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewDelegationCount() {
  const [delegationCount, setDelegationCount] = useState(0);

  useEffect(() => {
    const fetchDelegationCount = async () => {
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
        setDelegationCount(response.data.data.graphNetworks[0].delegationCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDelegationCount();
  }, []);

  return <div><h4>Delegation Count<br></br><NumberFormat value={delegationCount} displayType={'text'} thousandSeparator={true} decimalSeparator={false}/></h4></div>;

}

export default NewDelegationCount;