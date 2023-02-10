import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";

const ChatBotPage = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
            <h2 className="QB-about-page-subtitle">Welcome to the GRTDataHub Chatbot Page!</h2>
            <br></br>
            <hr className="QB-about-hr"></hr>
            <h2 className="QB-about-page-subtitle">You will now find a link to a translator help page at the bottom of each chatbot. This page explains how you can help with adding and proof reading content and translations via the open-source GitHub page, via the discussions or through a PR.</h2>
            <h2 className="QB-about-page-subtitle"><strong>NEW FEATURE!</strong> Ask for "help" to see the new button feature available.</h2>
            <br></br>
            <div className="ENG-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/ENGchatBot" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        GRTDataHub English Chatbot
      </a>
  </div>
            <br></br>  
            <div className="GER-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/GERchatBot" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        GRTDataHub Deutscher Chatbot
      </a>
  </div>
            <br></br>
            <div className="ESP-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/ESPchatBot"  target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        GRTDataHub Chatbot en Español
      </a>
  </div>
            <br></br>
            <div className="FRA-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/FRAchatBot" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Chatbot Français GRTDataHub
      </a>
  </div>
            <br></br> 
            <div className="TUR-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/TURchatBot" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        GRTDataHub Türkçe Chatbot
      </a>
  </div>
  <br></br> 
            <div className="URD-button QB-about-page-subtitle">
        <a className="chatbot-link" disable>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        GRTDataHub Urdu Chatbot (In Development)
      </a>
  </div>
            <br></br><br></br> 
            <hr className="QB-about-hr"></hr>
            <h2 className="QB-about-page-subtitle">The English, German, Spanish, French and the NEW Turkish Chatbots are built. All being continuously improved with new documentation, news, text and video tutorials along with the <strong>new button feature</strong>!<br></br>Urdu chatbot is currently in development.<br></br>Graph Advocates are actively translating content for 2 other community chatbots. To be announced soon!<br></br><br></br>If your community would benefit from a chatbot then please get in touch and I will be happy to build one.</h2>
            <br></br><br></br>
        </div>
</div>
       </>
    );
  }});

export default ChatBotPage;