import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewTotalIndexingIndexerRewards() {
  const [totalIndexingIndexerRewards, setTotalIndexingIndexerRewards] = useState(0);

  useEffect(() => {
    const fetchTotalIndexingIndexerRewards = async () => {
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
        setTotalIndexingIndexerRewards(response.data.data.graphNetworks[0].totalIndexingIndexerRewards);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalIndexingIndexerRewards();
  }, []);

  return <div><h4>Rewards<br></br><NumberFormat value={totalIndexingIndexerRewards/1000000000000000000} displayType={'text'} thousandSeparator={true} decimalScale={false} decimalSeparator={false}/> GRT</h4></div>;

}

export default NewTotalIndexingIndexerRewards;