// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'GRTDataHub Urdu Chatbot';

const message = 'If you would prefer to use buttons rather than messages within the chatbot, simply type "help" below and I will help you to find the answers.';

const URDconfig = {

  botName: botName,

  initialMessages: [
    createChatBotMessage(`Welcome! I am the ${botName}. I will help answer any questions that you may have about The Graph. I will provide you with a link to the relevant documentation along with text and video tutorials so that you can seek further information, if you wish. There is no such thing as a stupid question, I am here to help and educate!`), 
    createChatBotMessage(`${message}`),
  ],
};

export default URDconfig;

