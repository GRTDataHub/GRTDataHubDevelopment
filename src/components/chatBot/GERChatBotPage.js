import React from 'react';
import '../../App.css';
import NavbarChatbot from '../navbars/NavbarChatbot';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import GERConfig from './GERConfig';
import GERMessageParser from './GERMessageParser';
import GERActionProvider from './GERActionProvider';
import GERChatbotFooter from '../footer/GERChatbotFooter';

const GERChatBotPage = () => ({ 
  render(){
      return (
        <>
        <NavbarChatbot />
        <div className="chatbot-page-container">
            <div className="chatbot-text-container">
            <h3  className="chatbot-page-text">Den vollständigen Fragensatz für diesen Bot und die LETZTEN UPDATES finden Sie <a className="chatbot-link" href="./GERQuestionBank" target="_blank" rel="noreferrer">hier</a>.</h3><h3 className="feedback-text chatbot-page-text">Bitte unterstützen Sie den GRTDataHub Deutsch Chatbot, indem Sie bei Verbesserungen helfen, indem Sie Inhalte, Dokumentationen und Tutorials empfehlen.</h3>

        <Chatbot
        config={GERConfig}
        messageParser={GERMessageParser}
        actionProvider={GERActionProvider}
        headerText='GRTDataHub Deutsch Chatbot'
        placeholderText='Wie delegiere ich?'
        disableScrollToBottom
      /> 
       <button type="button" className="feedback-button btn btn-outline-dark"><a className="chatbot-link-button" href="https://mb3kald91rd.typeform.com/to/CXMqFGbe" target="_blank" rel="noreferrer"><h3 className="feedback-button-text">Chatbot-Verbesserungsformular
          </h3></a></button>
</div>
</div>
<GERChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default GERChatBotPage;



 <Chatbot
 config={GERConfig}
 messageParser={GERMessageParser}
 actionProvider={GERActionProvider}
/>