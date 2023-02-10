import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";

const GraphCentral = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
            <h2 className="QB-about-page-subtitle">Welcome to the <strong>Graph Central</strong> Page!</h2>
            <br></br> 
            <h2 className="QB-about-page-subtitle">What is it?</h2>
            <h3 className="QB-about-page-text"><a className="chatbot-link" href='https://graphcentral.substack.com/' target="_blank" rel="noreferrer">Graph Central</a> curates information and serves <a className="chatbot-link" href='https://twitter.com/graphcentral' target="_blank" rel="noreferrer">real-time updates</a> on happenings in The Graph’s ecosystem and web3.<br></br><br></br>A newsletter covering Community Grants, Hackathons, Improvement Proposals (GIPs), and much more happening in The Graph ecosystem.</h3><br></br><h3 className="QB-about-page-text">Created By <a className="chatbot-link" href='https://twitter.com/chidubem_w3' target="_blank" rel="noreferrer">Chidubem</a>, GraphAdvocate & DAO Member.</h3>
            
            <hr className="QB-about-hr"></hr>
            <br></br>

            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" href="https://graphcentral.substack.com/p/3-layer-2-loading" target="_blank" rel="noreferrer">Issue #4 - </a></h2>
            <br></br> */}
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" href="https://graphcentral.substack.com/p/3-layer-2-loading" target="_blank" rel="noreferrer">Issue #3 - Layer 2 loading...</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" href="https://graphcentral.substack.com/p/2-introduction-to-graph-improvement" target="_blank" rel="noreferrer">Issue #2 - Introduction to Graph Improvement Proposals (GIPs)</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" href="https://graphcentral.substack.com/p/graph-central" target="_blank" rel="noreferrer">Issue #1 - Community Grants</a></h2>
        </div>
</div>
       </>
    );
  }});

export default GraphCentral;
