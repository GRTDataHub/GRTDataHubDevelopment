import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';

function NewTotalTokensStaked() {
  const [totalTokensStaked, setTotalTokensStaked] = useState(0);

  useEffect(() => {
    const fetchTotalTokensStaked = async () => {
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
        setTotalTokensStaked(response.data.data.graphNetworks[0].totalTokensStaked/1000000000000000000);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTotalTokensStaked();
  }, []);

  return (
    <div>
      <h4>
      Total Indexer Stake<br></br>{" "}
        <NumberFormat
          value={totalTokensStaked}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={false}
          decimalSeparator={false}
        /> GRT
      </h4>
    </div>
  );
}

export default NewTotalTokensStaked;