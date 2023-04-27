import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import URDChatbotFooter from '../footer/URDChatbotFooter';
import ChatbotContent from './Files/GRTDataHub-Chatbot-Content.docx';
import ChatbotContentText from './Files/GRTDataHub_Chatbot_Content.txt';

const URDTranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">
GRTDataHub مترجم ہیلپ پیج پر خوش آمدید!</h1>
              <br></br>
              <h3 className="QB-about-page-subtitle">چیٹ بوٹس کا ترجمہ کیسے کیا جاتا ہے؟</h3>
              <h3 className="QB-about-page-text">گراف ایڈوکیٹس کے مترجمین نے کمیونٹیز کے لیے اس ٹول سے بہت فائدہ اٹھانے کے لیے مواد کا ترجمہ کرنے میں ایک حیرت انگیز کام کیا ہے۔ آپ تلاش کر سکتے ہیں کہ ہر ایک متعلقہ چیٹ بوٹ نے سب سے اوپر مواد کا ترجمہ اور ثبوت پڑھا ہے۔</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">میں مستقبل میں بہتری اور ترجمہ کرنے میں کس طرح مدد کرسکتا ہوں؟</h3>
              <h3 className="QB-about-page-text">آپ <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/pulls" target="_blank" rel="noreferrer">یہاں</a> GRTDataHub کے لیے اوپن سورس گٹ ہب صفحہ دیکھ سکتے ہیں۔
              پل رقویسٹس آپ کو دوسرے لوگوں کے ساتھ کوڈ پر تعاون کرنے میں مدد کرتی ہیں۔ جیسے ہی پل رقویسٹس بنتی ہیں، وہ یہاں قابل تلاش اور فلٹر کی فہرست میں ظاہر ہوں گی۔<br></br><br></br>نئے مواد اور تراجم سے متعلق بات چیت کے لیے <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/discussions" target="_blank" rel="noreferrer">یہاں</a> دیکھیں۔</h3><h3 className="QB-about-page-text">پ مجھے <a className="graphiql-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">ٹیلیگر</a>ام، ٹویٹر <a className="graphiql-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">یا</a> ای میل admin@GRTDataHub.com کے ذریعے بھی براہ راست پیغام بھیج سکتے ہیں۔ دوسرا آپشن یہ ہے کہ ہر چیٹ بوٹ کے نیچے چیٹ بوٹ کی بہتری کے فارم کو استعمال کریں۔</h3>
              <hr className="QB-about-hr"></hr>
              <h3 className="QB-about-page-subtitle">چیٹ بوٹ کے مشمولات ڈاؤن لوڈ کریں۔</h3>
              <div className="new-button QB-about-page-subtitle">
              <a href={ChatbotContent} download="GRTDataHub_Chatbot_Content.docx">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        مائیکروسافٹ ورڈ فائل
      </a>
  </div>
  <div className="new-button QB-about-page-subtitle">
  <a href={ChatbotContentText} download="GRTDataHub_Chatbot_Content.txt">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        ٹیکسٹ فائل
      </a>
  </div>
        </div>
</div>
<URDChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default URDTranslatorHelp;