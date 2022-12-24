// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'GRTDataHub Deutsch Chatbot';

const message = 'Wenn Sie lieber einen Button statt Nachrichten innerhalb des Chatbots verwenden möchten, geben Sie einfach unten "Hilfe" ein und ich helfe Ihnen, die Antworten zu finden.';

const GERconfig = {

  botName: botName,

  initialMessages: [
    createChatBotMessage(`Herzlich willkommen! Ich bin der ${botName}. Ich helfe Ihnen bei der Beantwortung aller Fragen, die Sie möglicherweise zu The Graph haben. Ich stelle Ihnen einen Link zur entsprechenden Dokumentation sowie Text- und Video-Tutorials zur Verfügung, damit Sie auf Wunsch weitere Informationen einholen können. Es gibt keine dummen Fragen, ich bin hier, um zu helfen und aufzuklären!`), 
    createChatBotMessage(`${message}`),
  ],
};

export default GERconfig;

