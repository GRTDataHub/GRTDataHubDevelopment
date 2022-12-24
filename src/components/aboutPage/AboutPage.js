import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";

const AboutPage = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
            <h2 className="QB-about-page-subtitle">What is GRTDataHub?</h2>
        <h3 className="QB-about-page-text">We are the hub for GRT data, providing visual representation of data collected from The Graph blockchain. Giving all GRT communities access to the most up to date information whenever, wherever, across all devices. Primarily created to feature in "The Graph News" on the Graphtronauts YouTube channel on a weekly basis, the app has grown into an asset that can be used by the GRT communities and group admins to educate, provide perspective, transparency and factual based data analytics about $GRT.</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Who uses GRTDataHub?</h2>
        <h3 className="QB-about-page-text">GRTDataHub works closely with any group admin or community members with their respective group admin`s permission. The app is used by content creators on a daily basis to bring all GRT communities from around the world the easy to interpet, nice to look at, positively trending GRT data.</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Can I get the daily content for my community?</h2>
        <h3 className="QB-about-page-text">If you are a group admin or have their permission then please get in contact via email admin@GRTDataHub.com, <a className="graphiql-link"  href="https://t.me/GraphtronautsDataHub" target="_blank" rel="noreferrer">Telegram</a> or <a className="graphiql-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">Twitter</a>.</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">GRTDataHub provided daily GRT data for the following communities</h2>
        <h3 className="QB-about-page-text"><a className="graphiql-link" href="https://t.me/graphtronauts" target="_blank">Graphtronauts</a><br></br><a className="graphiql-link" href="https://t.me/TheGraph_Germany" target="_blank">The Graph - Germany</a><br></br><a className="graphiql-link" href="https://t.me/graphprotocolTR" target="_blank" rel="noreferrer">The Graph - Turkey</a><br></br><a className="graphiql-link" href="https://t.me/GRTARAB" target="_blank" rel="noreferrer">The Graph - Arab</a><br></br><a className="graphiql-link" href="https://t.me/Graph_Persian" target="_blank" rel="noreferrer">The Graph - Persian</a><br></br><a className="graphiql-link" href="https://t.me/thegraphbangladesh" target="_blank">The Graph - Bangladesh</a><br></br><a className="graphiql-link" href="https://t.me/thegraphenespanol" target="_blank">The Graph - Español</a><br></br><a className="graphiql-link" href="https://t.me/TheGraphBR" target="_blank" rel="noreferrer">The Graph - Brasil</a><br></br><a className="graphiql-link" href="https://discord.com/invite/zqrwSFFW3F" target="_blank" rel="noreferrer">Graphrica</a><br></br><a className="graphiql-link" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="graphiql-link" href="https://t.me/thegraphfrenchchannel" target="_blank" rel="noreferrer">The Graph - France</a><br></br><a className="graphiql-link" href="/aboutPage" rel="noreferrer">The Graph - Belgium</a><br></br><a className="graphiql-link" href="https://t.me/graphindonesia" target="_blank" rel="noreferrer">The Graph - Indonesia</a><br></br><a className="graphiql-link" href="https://t.me/thegraphjapan" target="_blank" rel="noreferrer">The Graph - Japan</a><br></br><a className="graphiql-link" href="/aboutPage" rel="noreferrer">The Graph - Ukraine</a>
        </h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Where is the data collected from?</h2>
        <h3 className="QB-about-page-text">The data that we use can be found found <a className="graphiql-link" href="https://graphiql-online.com/" target="_blank" rel="noreferrer">here</a>, with the endpoints of https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-analytics and https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-mainnet. We use this data and create easy to interpret bar charts and line graphs for the Graphtronauts community.</h3>
        <h3 className="QB-about-page-text">The data within the Indexer page can be found <a className="graphiql-link" href="https://thegraph.stake-machine.com/?orgId=1&refresh=5m&from=1649154550894&to=1649240950894" target="_blank" rel="noreferrer">here</a>, I encourage you to go and check it out!</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">What about the other links within the app?</h2>
        <h3 className="QB-about-page-text">You should always read the terms of service, privacy policy and cookie policy when visiting any website. When you click a link from our app to another website or app, please familiarise yourself with their policies.</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">GRTDataHub Chatbot</h2>
        <h3 className="QB-about-page-text">The Chatbot will help answer any questions that you may have about The Graph. It will provide you with a link to the relevant documentation along with text and video tutorials so that you can seek further information, if you wish. There is no such thing as a stupid question, it is here help and educate!</h3>
        </div>
</div>
       </>
    );
  }});

export default AboutPage;