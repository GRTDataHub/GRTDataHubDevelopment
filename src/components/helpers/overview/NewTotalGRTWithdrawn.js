import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewTotalGRTWithdrawnConfirmed() {
  const [totalGRTWithdrawnConfirmed, setTotalGRTWithdrawnConfirmed] = useState(0);

  useEffect(() => {
    const fetchTotalGRTWithdrawnConfirmed = async () => {
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
                  totalGRTWithdrawnConfirmed
                  totalGRTDeposited
                  totalQueryFees
                  totalSupply
                 
                }
              }`
            
          }
        );
        setTotalGRTWithdrawnConfirmed(response.data.data.graphNetworks[0].totalGRTWithdrawnConfirmed);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalGRTWithdrawnConfirmed();
  }, []);

  return <div><h4>Total GRT Withdrawn<br></br><NumberFormat value={totalGRTWithdrawnConfirmed/1000000000000000000} displayType={'text'} thousandSeparator={true} decimalScale={false} decimalSeparator={false}/> GRT</h4></div>;

}

export default NewTotalGRTWithdrawnConfirmed;