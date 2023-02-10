import React from 'react';
import "../../App.css";

const ESPChatbotFooter = () =>{
return (
  <div className="chatbot-footer">
	<footer className="bg-dark text-center text-white">
  <div className="col-auto">
  <p className="pt-auto footer">
            <strong>Próximamente más datos!</strong><br></br>
            Envíe un correo electrónico a <span className="email">admin@GRTDataHub.com</span> para solicitar más datos.<br></br>Si tiene alguna sugerencia de mejora, encuentra fallas o problemas <br></br>con la aplicación, comuníquese a través de <a className="data-link"  href="https://t.me/GRTDataHub" target="_blank" rel="noreferrer">Telegram</a> o <a className="data-link"  href="https://twitter.com/GRTCrypto" target="_blank" rel="noreferrer">Twitter</a>.<br></br>
              <p><a className="about" href="/aboutPage">Sobre</a><a className="privacy-policy-link" href="/privacyPolicy">Política de privacidad</a><a className="privacy-policy-link" href="/cookiePolicy">Política de cookies</a><a className="privacy-policy-link" href="https://app.termly.io/notify/a85a151c-741d-4a15-a8f6-9d2bb64ee205" target="_blank" rel="noreferrer"><strong>
              No vendas mi información</strong>
</a><br></br><span className="C">© 2022 - GRTDataHub</span><br></br></p>
            </p>
          </div>
</footer>
</div>
)}

export default ESPChatbotFooter;