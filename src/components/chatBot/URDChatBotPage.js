import React from 'react';
import '../../App.css';
import NavbarChatbot from '../navbars/NavbarChatbot';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import URDConfig from './URDConfig';
import URDMessageParser from './URDMessageParser';
import URDActionProvider from './URDActionProvider';
import URDChatbotFooter from '../footer/URDChatbotFooter';

const URDChatBotPage = () => ({ 
  render(){
      return (
        <>
        <NavbarChatbot />
        <div className="chatbot-page-container">
        <div className="chatbot-text-container">
            <h3 className="feedback-text chatbot-page-text">براہ کرم GRTDataHub چیٹ بوٹ کو سپورٹ کریں اور مواد، دستاویزات اور ٹیوٹوریلز کی سفارش کرکے بہتری میں مدد کریں۔</h3><h3 className="feedback-text chatbot-page-text"><a className="chatbot-link" href="https://twitter.com/asadus16?s=21&t=1i0wTsEvxdyNDwHmOetdeQ" target="_blank" rel="noreferrer">اسد کی</a> مدد سے، چیٹ
 بوٹ کے تراجم کا جائزہ لیا گیا اور اس کے مطابق اردو کمیونٹی کے لیے اس کی مکمل صلاحیت کو استعمال کرنے اور اس میں ترمیم کی گئی۔</h3>
            <h3 className="feedback-text chatbot-page-text">یوٹیوب ٹیوٹوریلز کے لیے جو فی الحال صرف 
انگریزی میں ہیں، براہ کرم کیپشن کو اون کریں، ترتیبات کے بٹن پر کلک کریں، کیپشنز، خودکار ترجمہ، اور اردو کو منتخب کریں۔</h3>
            <h3 className="feedback-text chatbot-page-text">ٹیکسٹ ٹیوٹوریلز اور بلاگز کا کمیونٹی کی طرف سے فعال طور پر ترجمہ کیا جاتا ہے، اگر آپ تعاون کرنا چاہتے ہیں تو براہ کرم رابطہ کریں!</h3>

            







        <Chatbot
        config={URDConfig}
        messageParser={URDMessageParser}
        actionProvider={URDActionProvider}
        headerText='GRTDataHub اردو چیٹ بوٹ'
        placeholderText='میں کس طرح ڈیلیگیٹ کروں؟'
        disableScrollToBottom
      /> 

<br></br>
      <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/KQAHg2ib" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        چیٹ بوٹ کی بہتری کا فارم
      </a>
  </div>
          <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/URDTranslatorHelp" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        مترجم ہیلپ پیج
      </a>
  </div>          
</div>
</div>
<URDChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default URDChatBotPage;



 <Chatbot
 config={URDConfig}
 messageParser={URDMessageParser}
 actionProvider={URDActionProvider}
/>