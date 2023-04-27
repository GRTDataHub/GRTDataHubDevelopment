import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewTotalIndexerQueryFeesCollected() {
  const [totalIndexerQueryFeesCollected, setTotalIndexerQueryFeesCollected] = useState(0);

  useEffect(() => {
    const fetchTotalIndexerQueryFeesCollected = async () => {
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
                  totalIndexingIndexerRewards
                  totalIndexerQueryFeeRebates
                  totalIndexerQueryFeesCollected
                  
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
        setTotalIndexerQueryFeesCollected(response.data.data.graphNetworks[0].totalIndexerQueryFeesCollected);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalIndexerQueryFeesCollected();
  }, []);

  return <div><h4>Total Indexer Query Fees Collected<br></br><NumberFormat value={totalIndexerQueryFeesCollected/1000000000000000000} displayType={'text'} thousandSeparator={true} decimalScale={false} decimalSeparator={false}/> GRT</h4></div>;

}

export default NewTotalIndexerQueryFeesCollected;