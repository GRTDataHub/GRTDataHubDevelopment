// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'GRTDataHub Chatbot en español';

const message = 'Si prefiere usar botones en lugar de mensajes dentro del chatbot, simplemente escriba "ayuda" a continuación y lo ayudaré a encontrar las respuestas.';

const ESPconfig = {

  botName: botName,

  initialMessages: [
    createChatBotMessage(`¡Bienvenidos! Soy el ${botName}. Ayudaré a responder cualquier pregunta que pueda tener sobre The Graph. Le proporcionaré un enlace a la documentación relevante junto con tutoriales de texto y video para que pueda buscar más información, si lo desea. No existen las preguntas tontas, ¡estoy aquí para ayudar y educar!`), 
    createChatBotMessage(`${message}`),
  ],
};

export default ESPconfig;

