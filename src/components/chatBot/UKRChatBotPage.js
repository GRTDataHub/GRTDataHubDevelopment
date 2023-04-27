import React from 'react';
import '../../App.css';
import NavbarChatbot from '../navbars/NavbarChatbot';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import UKRConfig from './UKRConfig';
import UKRMessageParser from './UKRMessageParser';
import UKRActionProvider from './UKRActionProvider';
import UKRChatbotFooter from '../footer/UKRChatbotFooter';

const UKRChatBotPage = () => ({ 
  render(){
      return (
        <>
        <NavbarChatbot />
        <div className="chatbot-page-container">
            <div className="chatbot-text-container">
            <h3 className="feedback-text chatbot-page-text">Будь ласка, підтримайте чат-бота GRTDataHub, допомагаючи з покращенням, рекомендуючи контент, документацію та навчальні матеріали.</h3><h3 className="feedback-text chatbot-page-text">За допомогою <a className="chatbot-link" href="https://twitter.com/doxe01_official" target="_blank" rel="noreferrer">doxe</a> переклади чат-бота були переглянуті та відповідно змінені, щоб українська спільнота могла використовувати його повний потенціал.</h3>
            <h3 className="feedback-text chatbot-page-text">Для відеоуроків на YouTube, які наразі доступні лише англійською мовою, будь ласка, увімкніть субтитри/CC, натисніть кнопку налаштувань, виберіть субтитри, автопереклад та українську мову.</h3>
            <h3 className="feedback-text chatbot-page-text">Текстові матеріали та блоги активно перекладаються спільнотою, якщо ви хочете долучитися до перекладу, будь ласка, зв'яжіться з нами або відвідайте сторінку допомоги перекладачеві, натиснувши на кнопку під чат-ботом!</h3>

            <h3 className="feedback-text chatbot-page-text">


</h3>

        <Chatbot
        config={UKRConfig}
        messageParser={UKRMessageParser}
        actionProvider={UKRActionProvider}
        headerText='український чат-бот GRTDataHub'
        placeholderText='Як делегувати токени?'
        disableScrollToBottom
      /> 

      <br></br>
      <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/p1iMeLwu" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Форма для вдосконалення чат-бота
      </a>
  </div>
          <div className="new-button QB-about-page-subtitle">
        <a className="chatbot-link" href="/UKRTranslatorHelp" target="_blank" rel="noreferrer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Довідкова сторінка перекладача
      </a>
  </div>
          
</div>
</div>
<UKRChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default UKRChatBotPage;



 <Chatbot
 config={UKRConfig}
 messageParser={UKRMessageParser}
 actionProvider={UKRActionProvider}
/>