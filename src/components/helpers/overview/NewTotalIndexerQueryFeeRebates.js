import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewTotalIndexerQueryFeeRebates() {
  const [totalIndexerQueryFeeRebates, setTotalIndexerQueryFeeRebates] = useState(0);

  useEffect(() => {
    const fetchTotalIndexerQueryFeeRebates = async () => {
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
        setTotalIndexerQueryFeeRebates(response.data.data.graphNetworks[0].totalIndexerQueryFeeRebates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalIndexerQueryFeeRebates();
  }, []);

  return <div><h4>Total Indexer Query Fee Rebates<br></br><NumberFormat value={totalIndexerQueryFeeRebates/1000000000000000000} displayType={'text'} thousandSeparator={true} decimalScale={false} decimalSeparator={false}/> GRT</h4></div>;

}

export default NewTotalIndexerQueryFeeRebates;