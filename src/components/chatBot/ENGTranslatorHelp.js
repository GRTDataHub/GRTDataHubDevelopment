import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import ChatbotFooter from '../footer/ChatbotFooter';

const ENGTranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">Welcome to the GRTDataHub translator help page!</h1>
              <br></br><br></br>
              <h3 className="QB-about-page-subtitle">How are the chatbots traslated?</h3>
              <h3 className="QB-about-page-text">GraphAdvocates transaltors have done an amazing job at translating the content for the communities to benefit great from this tool. You can find who has trasnslated and proof read the content at the top each each respetive chatbot.</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">How do I help with improvements and translating in the future?</h3>
              <h3 className="QB-about-page-text">You can visit the open-source GitHub page for the GRTDataHub, and tell us your ideas! Either via the Discussions or by creating a PR.</h3>
        </div>
</div>
<ChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default ENGTranslatorHelp;