import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewDelegationUnbondingPeriod() {
  const [delegationUnbondingPeriod, setDelegationUnbondingPeriod] = useState(0);

  useEffect(() => {
    const fetchDelegationUnbondingPeriod = async () => {
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
        setDelegationUnbondingPeriod(response.data.data.graphNetworks[0].delegationUnbondingPeriod);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDelegationUnbondingPeriod();
  }, []);

  return <div><h4>Delegation Unbonding Period<br></br><NumberFormat value={delegationUnbondingPeriod} displayType={'text'} thousandSeparator={true} decimalSeparator={false}/> epochs</h4></div>;

}

export default NewDelegationUnbondingPeriod;