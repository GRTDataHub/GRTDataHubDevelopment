import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import FRAChatbotFooter from '../footer/FRAChatbotFooter';

const FRAQuestionBank = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">Welcome to the question bank for the GRTDataHub chatbot.</h1>
              <h2 className="QB-about-page-title">Here you will find all of the question that you can ask the chatbot. Do you think this list can be improved with more questions?<br></br><br></br>Please help the community by completing a short <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/esxDMqut " target="_blank" rel="noreferrer">feedback form</a>.</h2>
              <h3 className="QB-about-page-subtitle">SOME RECENT UPDATES</h3>
              <h3 className="QB-about-page-text">Updated Geo - Geo Genesis<br></br>T‑Mobile Launch New T Challenge Seeking Web3 Development Through 5G - The Graph<br></br>The Graph Now Supports Solana with Substreams<br></br>Graph Advocates Update with Grant Process and Withdrawing of Grant Funds<br></br>Updated Choosing Indexer answer<br></br>Updated Indexer Office Hours link<br></br>GRTiQ<br></br>The Graph Social<br></br>The Graph Roadmap for 2023, answer updated with new easy to interpret article<br></br>Learn Web3 updated with new learning content<br></br>A developer’s cheat sheet for getting up to speed with subgraphs in 15 minutes, added to subgraph answer<br></br>Updated Sunsetting the Hosted Service answer<br></br>The sunrise of decentralized data<br></br>How to Delegate your GRT tokens with a Hardware Wallet tutorial added to Wallet answer<br></br>The benefits of using The Graph Network vs Self Hosting<br></br>Curator Tools<br></br>Updated Tenderize docs with Graphtronauts 'How to Stake Guide<br></br>How to evaluate and determine if a subgraph is legitimate<br></br>How to Become an Effective Indexer<br></br>Learn Web3 Dev for FREE<br></br>How to Query The Graph Protocol for On-Chain Data using Python<br></br>Graphtronauts FAQ for Delegators blog<br></br>Messari added to Core Devs<br></br>Jobs Opportunities at The Graph<br></br>GraphQL API<br></br>Q2 2022 Quarterly GRT Participant Update<br></br>Fire Hose docs update<br></br>Coinbase Wallet Delegating<br></br>iPhone syncing your MetaMask info to iCloud?!<br></br>How do Web3 dApps works?<br></br>Soulbound Studio<br></br>And more!</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">Live Data / Statistics</h3>
        <h3 className="QB-about-page-text">Active Delegator Count<br></br>Active Delegation Count<br></br>Holders Count<br></br>Subgraphs Count<br></br>Curators Count<br></br>Active Indexers Count<br></br>Total Query Fees Count<br></br>Total Staked GRT<br></br>Total GRT Delegated by Delegators<br></br>Total GRT Signalled by Curators<br></br>Total Delegated GRT by Indexers<br></br>Total GRT Burned</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Delegator</h2>
        <h3 className="QB-about-page-text">What is the active delegator count?<br></br>What is the total GRT delegated by delegators?<br></br>What are delegator rewards?<br></br>What is a delegator?<br></br>How do I delegate?<br></br>What are the delegation fees?<br></br>Can I delegate with a wallet?<br></br>How long to undelegate?<br></br>What is gas?<br></br>What is liquid staking?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Indexer</h2>
        <h3 className="QB-about-page-text">What is an indexer?<br></br>What is the active indexers count?<br></br>What is the total delegated GRT by indexers?<br></br>How do I choose an indexer?<br></br>What are the hardware requirements for indexing?<br></br>Indexer Office Hours<br></br>What is the Indexer reward cut?<br></br>How much GRT do I need to become an Indexer?<br></br>Indexers Location<br></br>How do I compare Indexers?<br></br>What tools can I use to find an Indexer?<br></br>How many GRT tokens do I need to become an Indexer?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Curator</h2>
        <h3 className="QB-about-page-text">What is the curators count?<br></br>What is the total GRT signalled by curators?<br></br>What is a curator?<br></br>What is a bonding curve?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Subgraph</h2>
        <h3 className="QB-about-page-text">What is a subgraph?<br></br>How do I signal a subgraph?<br></br>How do I verify a subgraph?<br></br>What is the subgraphs count?<br></br>How do i get subgraphs id from ipfs hash?<br></br>How do I create a subgraph?<br></br>How do I deploy a subgraph?<br></br>How do I migrate a subgraph from hosted service to mainnet?<br></br>What is an allocation?<br></br>What courses are available?<br></br>What is the difference between hosted and mainnet?<br></br>What is the hosted service?<br></br>What is sunsetting the hosted service?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Learn about The Graph</h2>
        <h3 className="QB-about-page-text">What is the graph foundation?<br></br>What is the graph council?<br></br>Who are the founding members of the graph?<br></br>Who provides funding to the graph?<br></br>Who are the core developers?<br></br>What is the graph?<br></br>What is edge & node?<br></br>What is Graph day?<br></br>What is Graph hack?<br></br>Does the graph do airdrops?<br></br>Is there a way to get free GRT?<br></br>What is the Github address for the graph?<br></br>Where can I find the road map?<br></br>What is the schema used by the graph?<br></br></h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Community</h2>
        <h3 className="QB-about-page-text">What is the graph official discord server?<br></br>What is the graph telegram?<br></br>Where can I find the graph community?<br></br>What are the graphtronauts?<br></br>What is an advocate?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Query Fees</h2>
        <h3 className="QB-about-page-text">What are query fees?<br></br>How are indexing rewards and query fees distributed?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Tokenomics</h2>
        <h3 className="QB-about-page-text">What are the tokenonomics?<br></br>What are token unlocks?<br></br>What is token supply?<br></br>What is the GRT token address?<br></br>What is an epoch?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Core Developers | Graph Day </h2>
        <h3 className="QB-about-page-text">Who are the core developers?<br></br>What is graph ops?<br></br>What is geo?<br></br>What are substreams?<br></br>What is streamingfast?<br></br>What is the guild?<br></br>What is semiotic?<br></br>What is figment?<br></br>What is firehose?<br></br>Graph Day<br></br>Graph Hack</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Learn Web 3</h2>
        <h3 className="QB-about-page-text">Women in web 3<br></br>What courses are available?<br></br>What is Web3?<br></br>What is a blockchain?<br></br>Is blockchain safe?<br></br>What is cryptocurrency?<br></br>What is ethereum?<br></br>What is proof of work?<br></br>What is proof of stake?<br></br>What is a stable coin?<br></br>What is the difference between a coin and a token?<br></br>What is a cex?<br></br>What is a dex?<br></br>What is layer two?<br></br>What is zkproof?<br></br>What is a smart contract?<br></br>What is a nft?<br></br>What is mining?<br></br>What are nodes?<br></br>What is a token burn?<br></br>What is a dao?<br></br>What is zksnark?<br></br>What is zkstark?<br></br>What is the metaverse?</h3>
        </div>
</div>
<FRAChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default FRAQuestionBank;