import React from 'react';
import '../../App.css';
import NavbarChatbot from '../navbars/NavbarChatbot';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import UKRConfig from './UKRConfig';
import UKRMessageParser from './UKRMessageParser';
import UKRActionProvider from './UKRActionProvider';
import UKRChatbotFooter from '../footer/UKRChatbotFooter';

const UKRChatBotPage = () => ({ 
  render(){
      return (
        <>
        <NavbarChatbot />
        <div className="chatbot-page-container">
            <div className="chatbot-text-container">
            <h3 className="feedback-text chatbot-page-text">Please support the GRTDataHub Ukrainian Chatbot by helping with improvements by recommending content, documentation and tutorials.</h3>

        <Chatbot
        config={UKRConfig}
        messageParser={UKRMessageParser}
        actionProvider={UKRActionProvider}
        headerText='GRTDataHub English Chatbot'
        placeholderText='How do I delegate?'
        disableScrollToBottom
      /> 

      <br></br>
      <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/esxDMqut " target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Chatbot Improvements Form
      </a>
  </div>
          <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/UKRTranslatorHelp" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Translator Help Page
      </a>
  </div>
          
</div>
</div>
<UKRChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default UKRChatBotPage;



 <Chatbot
 config={UKRConfig}
 messageParser={UKRMessageParser}
 actionProvider={UKRActionProvider}
/>