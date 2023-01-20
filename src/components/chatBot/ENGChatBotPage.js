import React from 'react';
import '../../App.css';
import NavbarChatbot from '../navbars/NavbarChatbot';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import ENGConfig from './ENGConfig';
import ENGMessageParser from './ENGMessageParser';
import ENGActionProvider from './ENGActionProvider';
import ChatbotFooter from '../footer/ChatbotFooter';

const ENGChatBotPage = () => ({ 
  render(){
      return (
        <>
        <NavbarChatbot />
        <div className="chatbot-page-container">
            <div className="chatbot-text-container">
            <h3 className="feedback-text chatbot-page-text">Please support the GRTDataHub English Chatbot by helping with improvements by recommending content, documentation and tutorials.</h3>

        <Chatbot
        config={ENGConfig}
        messageParser={ENGMessageParser}
        actionProvider={ENGActionProvider}
        headerText='GRTDataHub English Chatbot'
        placeholderText='How do I delegate?'
        disableScrollToBottom
      /> 

      <br></br>
       <button type="button" className="feedback-button btn btn-outline-dark"><a className="chatbot-link-button" href="https://mb3kald91rd.typeform.com/to/esxDMqut " target="_blank" rel="noreferrer"><h3 className="feedback-button-text">Chatbot Improvements Form
          </h3></a></button>
          <br></br>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" href="/ENGTranslatorHelp" target="_blank" rel="noreferrer">Translator Help Page</a></h2>

          
</div>
</div>
<ChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default ENGChatBotPage;



 <Chatbot
 config={ENGConfig}
 messageParser={ENGMessageParser}
 actionProvider={ENGActionProvider}
/>