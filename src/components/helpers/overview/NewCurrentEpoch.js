import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewCurrentEpoch() {
  const [currentEpoch, setCurrentEpoch] = useState(0);

  useEffect(() => {
    const fetchCurrentEpoch = async () => {
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
        setCurrentEpoch(response.data.data.graphNetworks[0].currentEpoch);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrentEpoch();
  }, []);

  return <div><h4>Current Epoch<br></br><NumberFormat value={currentEpoch} displayType={'text'} thousandSeparator={true} decimalSeparator={false}/></h4></div>;

}

export default NewCurrentEpoch;