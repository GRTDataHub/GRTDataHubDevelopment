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
            <h3 className="feedback-text chatbot-page-text">Bitte unterstützen Sie den GRTDataHub Deutscher Chatbot, indem Sie bei Verbesserungen helfen, indem Sie Inhalte, Dokumentationen und Tutorials empfehlen.</h3>
            <h3 className="feedback-text chatbot-page-text">Mit der Hilfe von <a className="chatbot-link" href="https://twitter.com/german_thegraph?s=21&t=cVYEbpPulTa3Uw6fHWaS7Q" target="_blank" rel="noreferrer">Andy</a> wurden die Übersetzungen in diesem Chatbot Korrektur gelesen und entsprechend geändert, damit die deutsche Community ihr volles Potenzial nutzen und nutzen kann.</h3>
            <h3 className="feedback-text chatbot-page-text">Pour les didacticiels YouTube qui ne sont actuellement qu'en anglais, veuillez activer les sous-titres/CC, cliquez sur le bouton Paramètres, sélectionnez les sous-titres, la traduction automatique et l'allemand.</h3>
            <h3 className="feedback-text chatbot-page-text">Text-Tutorials und Blogs werden aktiv von der Community übersetzt, wenn Sie etwas beitragen möchten, dann nehmen Sie bitte Kontakt mit uns auf!</h3>
            
        <Chatbot
        config={GERConfig}
        messageParser={GERMessageParser}
        actionProvider={GERActionProvider}
        headerText='GRTDataHub Deutscher Chatbot'
        placeholderText='Wie delegiere ich?'
        disableScrollToBottom
      /> 
        <br></br>
      <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/CXMqFGbe" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Chatbot-Verbesserungsformular
      </a>
  </div>
          <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/GERTranslatorHelp" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Übersetzer-Hilfeseite
      </a>
  </div>
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