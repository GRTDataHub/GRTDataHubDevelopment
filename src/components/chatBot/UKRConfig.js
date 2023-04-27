// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'український чат-бот GRTDataHub';

const message = 'Якщо ви віддаєте перевагу використанню кнопок, а не повідомлень у чат-боті, просто введіть "help" нижче, і я допоможу вам знайти відповіді.';

const UKRconfig = {

  botName: botName,

  initialMessages: [
    createChatBotMessage(`Ласкаво просимо! Я ${botName}. Я допоможу відповісти на будь-які питання, які у вас можуть виникнути про The Graph. Я надам вам посилання на відповідну документацію, а також на текстові та відеоуроки, щоб ви могли шукати додаткову інформацію, якщо бажаєте. Дурних питань не буває, я тут, щоб допомогти та навчити!`), 
    createChatBotMessage(`${message}`),
  ],
};

export default UKRconfig;

