import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import ChatbotFooter from '../footer/ChatbotFooter';

const TURTranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">How does the content within the chatbot get translated?</h1>
             
              <h3 className="QB-about-page-subtitle">SOME RECENT UPDATES</h3>
              <h3 className="QB-about-page-text">Updated Geo - Geo Genesis<br></br>T‑Mobile Launch New T Challenge Seeking Web3 Development Through 5G - The Graph<br></br>The Graph Now Supports Solana with Substreams<br></br>Graph Advocates Update with Grant Process and Withdrawing of Grant Funds<br></br>Updated Choosing Indexer answer<br></br>Updated Indexer Office Hours link<br></br>GRTiQ<br></br>The Graph Social<br></br>The Graph Roadmap for 2023, answer updated with new easy to interpret article<br></br>Learn Web3 updated with new learning content<br></br>A developer’s cheat sheet for getting up to speed with subgraphs in 15 minutes, added to subgraph answer<br></br>Updated Sunsetting the Hosted Service answer<br></br>The sunrise of decentralized data<br></br>How to Delegate your GRT tokens with a Hardware Wallet tutorial added to Wallet answer<br></br>The benefits of using The Graph Network vs Self Hosting<br></br>Curator Tools<br></br>Updated Tenderize docs with Graphtronauts 'How to Stake Guide<br></br>How to evaluate and determine if a subgraph is legitimate<br></br>How to Become an Effective Indexer<br></br>Learn Web3 Dev for FREE<br></br>How to Query The Graph Protocol for On-Chain Data using Python<br></br>Graphtronauts FAQ for Delegators blog<br></br>Messari added to Core Devs<br></br>Jobs Opportunities at The Graph<br></br>GraphQL API<br></br>Q2 2022 Quarterly GRT Participant Update<br></br>Fire Hose docs update<br></br>Coinbase Wallet Delegating<br></br>iPhone syncing your MetaMask info to iCloud?!<br></br>How do Web3 dApps works?<br></br>Soulbound Studio<br></br>And more!</h3>
        <hr className="QB-about-hr"></hr>

        <h2 className="QB-about-page-title">Do you think this list can be improved with more questions?<br></br><br></br>Please help the community by completing a short <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/esxDMqut " target="_blank" rel="noreferrer">feedback form</a>.</h2>
        </div>
</div>
<ChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default TURTranslatorHelp;