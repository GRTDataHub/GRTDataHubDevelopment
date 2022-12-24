import React from 'react';
import '../../App.css';
import NavbarChatbot from '../navbars/NavbarChatbot';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import FRAConfig from './ENGConfig';
import FRAMessageParser from './ENGMessageParser';
import FRAActionProvider from './ENGActionProvider';
import FRAChatbotFooter from '../footer/FRAChatbotFooter';

const FRAChatBotPage = () => ({ 
  render(){
      return (
        <>
        <NavbarChatbot />
        <div className="chatbot-page-container">
            <div className="chatbot-text-container">
            <h3  className="chatbot-page-text">To find the full question set for this bot and RECENT UPDATES please see <a  className="chatbot-link" href="./questionBank" target="_blank" rel="noreferrer">here</a>.</h3><h3 className="feedback-text chatbot-page-text">Please support the GRTDataHub English Chatbot by helping with improvements by recommending content, documentation and tutorials.</h3>

        <Chatbot
        config={FRAConfig}
        messageParser={FRAMessageParser}
        actionProvider={FRAActionProvider}
        headerText='GRTDataHub French Chatbot'
        placeholderText='How do I delegate?'
        disableScrollToBottom
      /> 
       <button type="button" className="feedback-button btn btn-outline-dark"><a className="chatbot-link-button" href="https://mb3kald91rd.typeform.com/to/esxDMqut " target="_blank" rel="noreferrer"><h3 className="feedback-button-text">Chatbot Improvements Form
          </h3></a></button>
</div>
</div>
<FRAChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default FRAChatBotPage;



 <Chatbot
 config={FRAConfig}
 messageParser={FRAMessageParser}
 actionProvider={FRAActionProvider}
/>