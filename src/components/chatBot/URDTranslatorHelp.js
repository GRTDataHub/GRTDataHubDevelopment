import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import URDChatbotFooter from '../footer/URDChatbotFooter';

const URDTranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">Welcome to the GRTDataHub translator help page!</h1>
              <br></br>
              <h3 className="QB-about-page-subtitle">How are the chatbots translated?</h3>
              <h3 className="QB-about-page-text">GraphAdvocates translators have done an amazing job at translating the content for the communities to benefit greatly from this tool. You can find who has translated and proof read the content at the top each each respective chatbot.</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">How do I help with improvements and translating in the future?</h3>
              <h3 className="QB-about-page-text">You can visit the open-source GitHub page for the GRTDataHub, <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/pulls" target="_blank" rel="noreferrer">here</a>. Pull requests help you collaborate on code with other people. As pull requests are created, they’ll appear here in a searchable and filterable list.<br></br><br></br>See <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/discussions" target="_blank" rel="noreferrer">here</a>, for discussions regarding new content and translations.</h3><h3 className="QB-about-page-text">You can also message me directly via <a className="graphiql-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">Telegram</a>, <a className="graphiql-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">Twitter</a> or email admin@GRTDataHub.com. Another option is to use the Chatbot improvements form at the bottom of every chatbot.</h3>
        </div>
</div>
<URDChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default URDTranslatorHelp;