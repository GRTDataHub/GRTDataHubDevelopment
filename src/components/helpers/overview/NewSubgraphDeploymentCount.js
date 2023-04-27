import { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from 'react-number-format';

function NewSubgraphDeploymentCount() {
  const [subgraphDeploymentCount, setSubgraphDeploymentCount] = useState(0);

  useEffect(() => {
    const fetchSubgraphDeploymentCount = async () => {
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
        setSubgraphDeploymentCount(response.data.data.graphNetworks[0].subgraphDeploymentCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubgraphDeploymentCount();
  }, []);

  return <div><h4>Subgraph Deployment Count<br></br><NumberFormat value={subgraphDeploymentCount} displayType={'text'} thousandSeparator={true} decimalSeparator={false}/></h4></div>;

}

export default NewSubgraphDeploymentCount;