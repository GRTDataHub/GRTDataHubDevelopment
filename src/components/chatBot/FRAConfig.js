// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Chatbot Français GRTDataHub';

const message = 'Si vous préférez utiliser des boutons plutôt que des messages dans le chatbot, tapez simplement "aide" ci-dessous et je vous aiderai à trouver les réponses.';

const FRAconfig = {

  botName: botName,

  initialMessages: [
    createChatBotMessage(`Bienvenue! Je suis le ${botName}. Je vais aider à répondre à toutes les questions que vous pourriez avoir sur The Graph. Je vous fournirai un lien vers la documentation pertinente ainsi que des didacticiels textuels et vidéo afin que vous puissiez rechercher des informations supplémentaires, si vous le souhaitez. Il n'y a pas de question stupide, je suis là pour vous aider et vous informer !`), 
    createChatBotMessage(`${message}`),
  ],
};

export default FRAconfig;

