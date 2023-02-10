import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import ChatbotFooter from '../footer/ChatbotFooter';
import ChatbotContent from './Files/GRTDataHub-Chatbot-Content.docx';
import ChatbotContentText from './Files/GRTDataHub_Chatbot_Content.txt';

const TURTranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">GRTDataHub çevirmen yardım sayfasına hoş geldiniz!</h1>
              <br></br>
              <h3 className="QB-about-page-subtitle">Chatbotlar nasıl çevrilir?</h3>
              <h3 className="QB-about-page-text">GraphAdvocates çevirmenleri, toplulukların bu araçtan büyük ölçüde yararlanabilmesi için içeriği çevirmede harika bir iş çıkardı. Her bir ilgili sohbet robotunun üst kısmında içeriği kimin çevirdiğini ve prova okumasını bulabilirsiniz.<br></br><br></br>Yeni içerik ve çevirilerle ilgili tartışmalar için <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/discussions" target="_blank" rel="noreferrer">buraya</a> bakın.</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">Gelecekte iyileştirmeler ve çeviri konusunda nasıl yardımcı olabilirim?</h3>
              <h3 className="QB-about-page-text">GRTDataHub için açık kaynaklı GitHub sayfasını <a className="graphiql-link" href="https://github.com/GRTDataHub/GRTDataHubDevelopment/pulls" target="_blank" rel="noreferrer">buradan</a> ziyaret edebilirsiniz. Çekme istekleri, diğer kişilerle kod üzerinde işbirliği yapmanıza yardımcı olur. Çekme istekleri oluşturuldukça, burada aranabilir ve filtrelenebilir bir listede görünürler.</h3>
              <h3 className="QB-about-page-text">Bana doğrudan <a className="graphiql-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">Telegram</a>, <a className="graphiql-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">Twitter</a> veya admin@GRTDataHub.com. aracılığıyla da mesaj gönderebilirsiniz. Diğer bir seçenek de, her chatbot'un altında bulunan Chatbot iyileştirmeleri formunu kullanmaktır.</h3>
              <hr className="QB-about-hr"></hr>
              <h3 className="QB-about-page-subtitle">Chatbot İçeriğini İndirin</h3>
              <div className="new-button QB-about-page-subtitle">
              <a href={ChatbotContent} download="GRTDataHub_Chatbot_Content.docx">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Microsoft Word File
      </a>
  </div>
  <div className="new-button QB-about-page-subtitle">
  <a href={ChatbotContentText} download="GRTDataHub_Chatbot_Content.txt">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Text File
      </a>
  </div>
        </div>
</div>
<ChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default TURTranslatorHelp;