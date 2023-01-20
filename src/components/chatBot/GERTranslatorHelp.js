import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import GERChatbotFooter from '../footer/GERChatbotFooter';

const GERTranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">Willkommen auf der Hilfeseite des GRTDataHub-Übersetzers!</h1>
              <br></br>
              <h3 className="QB-about-page-subtitle">Wie werden die Chatbots übersetzt?</h3>
              <h3 className="QB-about-page-text">Die Übersetzer von GraphAdvocates haben großartige Arbeit geleistet, indem sie die Inhalte übersetzt haben, damit die Communities stark von diesem Tool profitieren. Wer den Inhalt übersetzt und Korrektur gelesen hat, finden Sie oben bei jedem jeweiligen Chatbot.</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">Wie kann ich in Zukunft bei Verbesserungen und Übersetzungen helfen?</h3>
              <h3 className="QB-about-page-text">Sie können die Open-Source-GitHub-Seite für den GRTDataHub <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/pulls" target="_blank" rel="noreferrer">hier</a> besuchen. Pull-Requests helfen Ihnen, mit anderen Personen an Code zusammenzuarbeiten. Wenn Pull-Requests erstellt werden, erscheinen sie hier in einer durchsuchbaren und filterbaren Liste.</h3>
              <h3 className="QB-about-page-text">Sie können mir auch direkt per <a className="graphiql-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">Telegramm</a>, <a className="graphiql-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">Twitter</a> oder E-Mail an admin@GRTDataHub.com eine Nachricht senden. Eine weitere Option ist die Verwendung des Chatbot-Verbesserungsformulars am Ende jedes Chatbots.</h3>
        </div>

        









Sie können mir auch direkt per Telegramm, Twitter oder E-Mail an admin@GRTDataHub.com eine Nachricht senden. Eine weitere Option ist die Verwendung des Chatbot-Verbesserungsformulars am Ende jedes Chatbots.
</div>
<GERChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default GERTranslatorHelp;