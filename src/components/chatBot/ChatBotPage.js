import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";

const ChatBotPage = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
            <h2 className="QB-about-page-subtitle">Welcome to the GRTDataHub Chatbot Page!</h2>
            <br></br><br></br> 
            <hr className="QB-about-hr"></hr>
            <h2 className="QB-about-page-subtitle"><strong>NEW FEATURE!</strong> Ask for "help" to see the new button feature available.</h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" href="/ENGchatBot" target="_blank" rel="noreferrer">GRTDataHub English Chatbot</a></h2>
            <br></br><br></br>    
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" href="/GERchatBot" target="_blank" rel="noreferrer">GRTDataHub Deutsch Chatbot</a></h2>
            <br></br><br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" href="/ESPchatBot" 
            target="_blank" rel="noreferrer">GRTDataHub Chatbot en Español</a></h2>
            <br></br><br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            // href="/FRAchatBot" 
            // target="_blank" rel="noreferrer"
            onClick={() => alert('COMING SOON!, À venir!')}
            >Chatbot Français GRTDataHub</a></h2>
            <br></br><br></br> 
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            // href="/TURchatBot" 
            // target="_blank" rel="noreferrer"
            onClick={() => alert('COMING SOON!, Çok yakında!')}
            >GRTDataHub Türkçe Chatbot</a></h2>
            <br></br><br></br> 
            <hr className="QB-about-hr"></hr>
            <h2 className="QB-about-page-subtitle">The English,German and the NEW Spanish Chatbots are built, with ones for the French and Turkish communities being built. All being continuously improved with new documentation, news, text and video tutorials along with the <strong>new button feature</strong>!<br></br><br></br>If your community would benefit from a chatbot then please get in touch and I will be happy to build one.<br></br>Psst! There may be 2 more chatbots in the pipelines for 2 other communities.</h2>
            <br></br><br></br>
        
        </div>
</div>
       </>
    );
  }});

export default ChatBotPage;