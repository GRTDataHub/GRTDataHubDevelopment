import React from 'react';
import '../../App.css';
import NavbarChatbot from '../navbars/NavbarChatbot';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import HINConfig from './HINConfig';
import HINMessageParser from './HINMessageParser';
import HINActionProvider from './HINActionProvider';
import HINChatbotFooter from '../footer/HINChatbotFooter';

const HINChatBotPage = () => ({ 
  render(){
      return (
        <>
        <NavbarChatbot />
        <div className="chatbot-page-container">
            <div className="chatbot-text-container">
            <h3 className="feedback-text chatbot-page-text">कृपया सामग्री, दस्तावेज़ीकरण और ट्यूटोरियल की सिफारिश करके सुधारों में सहायता करके GRTDataHub चैटबॉट का समर्थन करें।</h3>
            <h3 className="feedback-text chatbot-page-text"><a className="chatbot-link" href="https://twitter.com/agrimnagrani" target="_blank" rel="noreferrer">Agrim</a> की मदद से, चैटबॉट अनुवादों की समीक्षा की गई और तदनुसार हिंदी समुदाय के लिए इसकी पूरी क्षमता का उपयोग और उपयोग करने के लिए संशोधित किया गया।</h3>
            <h3 className="feedback-text chatbot-page-text">YouTube ट्यूटोरियल के लिए जो वर्तमान में केवल अंग्रेजी में हैं, कृपया कैप्शन/सीसी सक्षम करें, सेटिंग बटन पर क्लिक करें, कैप्शन चुनें, ऑटो-ट्रांसलेशन और हिंदी।</h3>
            <h3 className="feedback-text chatbot-page-text">टेक्स्ट ट्यूटोरियल और ब्लॉग समुदाय द्वारा सक्रिय रूप से अनुवादित किए जाते हैं, यदि आप योगदान करना चाहते हैं तो कृपया चैटबॉट के नीचे दिए गए बटन के माध्यम से संपर्क करें या अनुवादक सहायता पृष्ठ पर जाएं!</h3>

        <Chatbot
        config={HINConfig}
        messageParser={HINMessageParser}
        actionProvider={HINActionProvider}
        headerText='GRTDataHub हिंदी चैटबॉट'
        placeholderText='मैं कैसे सौंप सकता हूँ?'
        disableScrollToBottom
      /> 

      <br></br>
      <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/RYZCwa6C" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        चैटबॉट सुधार फॉर्म
      </a>
  </div>
          <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/HINTranslatorHelp" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        अनुवादक सहायता पृष्ठ
      </a>
  </div>
          
</div>
</div>
<HINChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default HINChatBotPage;



 <Chatbot
 config={HINConfig}
 messageParser={HINMessageParser}
 actionProvider={HINActionProvider}
/>