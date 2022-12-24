import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";

const ReduceGasESP = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
            <h2 className="QB-about-page-subtitle">Esta página fue traducida del original <a className="chatbot-link" href="https://medium.com/@OG-Graphtronauts/how-to-reduce-the-cost-of-gas-for-delegating-your-grt-tokens-8b2edb3697c5" target="_blank" rel="noreferrer">aquí.</a></h2>
            <hr className="QB-about-hr"></hr>
            <h2 className="QB-about-page-subtitle">Cómo reducir el costo de la gasolina por delegar tus tokens GRT</h2>
            <h3 className="QB-about-page-text">Aprende a pagar una tarifa mínima de gasolina para delegar con The Graph</h3>
            <hr className="QB-about-hr"></hr>
            <h3 className="QB-about-page-text">En este breve artículo queremos mostrarte cómo reducir el costo de la gasolina que tienes que pagar para delegar tus tokens GRT con The Graph.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Primero, comencemos a aclarar que MetaMask siempre muestra una tarifa mucho más alta que la real que terminará pagando. Para verificar el mejor momento para ahorrar en la tarifa de gasolina, puede usar el Gráfico semanal de gasolina en la aplicación Graphtronauts, consulte <a className="chatbot-link" href="https://graphtronauts.com/#/indexers" target="_blank" rel="noreferrer">aquí</a>.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Durante los fines de semana, puede ahorrar mucho en la tarifa de transacción, y también en las mañanas (zona horaria CET), donde el precio del gas suele ser inferior a 10 gwei.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Ahora le mostraremos una delegación real y podrá aprender cómo reducir la tarifa que debe pagar para delegar sus tokens GRT.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">MetaMask muestra un costo estimado de $105 por delegar mis tokens GRT. Tarifa bastante alta para mi delegación de 3.000 GRT.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Lo que tiene que hacer es hacer clic en el botón 'EDITAR' y comenzar a bajar la 'Tarifa máxima' hasta llegar al límite donde MetaMask dice 'Tarifa máxima demasiado baja para las condiciones de la red' y luego solo tiene que ir un poco arriba. El objetivo es estar en la cantidad mínima necesaria para aprobar la transacción.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Luego simplemente haga clic en 'Guardar' y espere a que se apruebe la transacción.</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Y aquí lo tienes, de 105$ a 33$, ¡no está mal!</h3>
            <br></br><br></br>
            <h3 className="QB-about-page-text">Puedes ver este breve video que muestra el proceso <a className="chatbot-link" href="https://www.youtube.com/watch?v=Q2eOSVkienE&feature=emb_imp_woyt" target="_blank" rel="noreferrer">aquí</a>.</h3>
        </div>
</div>
       </>
    );
  }});

export default ReduceGasESP;