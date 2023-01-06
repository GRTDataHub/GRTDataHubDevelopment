import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import GERChatbotFooter from '../footer/GERChatbotFooter';

const GERTranslatorHelp = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
              <h1 className="QB-about-page-title">Willkommen in der Fragendatenbank für den deutschen Chatbot GRTDataHub.</h1>
              <h2 className="QB-about-page-title">Hier finden Sie alle Fragen, die Sie dem Chatbot stellen können. Glauben Sie, dass diese Liste durch weitere Fragen verbessert werden kann?<br></br><br></br>Bitte helfen Sie der Community, indem Sie ein kurzes <a className="chatbot-link" href="https://mb3kald91rd.typeform.com/to/CXMqFGbe" target="_blank" rel="noreferrer">Feedback-Formular</a> ausfüllen.</h2>
              <h3 className="QB-about-page-subtitle">NEUESTE UPDATES</h3>
              <h3 className="QB-about-page-text">Aktualisiertes Geo - Geo Genesis<br></br>T‑Mobile startet neue T-Challenge Seeking Web3 Development Through 5G – The Graph<br></br>Der Graph unterstützt jetzt Solana mit Substreams<br></br>Graph Advocates Update mit Grant-Prozess und Abzug von Grant-Mitteln<br></br>Die Antwort „Choosing Indexer“ wurde aktualisiert<br></br>Aktualisierter Link zu den Indexer-Bürozeiten<br></br>GRTiQ<br></br>Der Graph Social<br></br>Die Graph-Roadmap für 2023, Antwort aktualisiert mit neuem, leicht zu interpretierendem Artikel<br></br>Learn Web3 aktualisiert mit neuen Lerninhalten<br></br>Ein Spickzettel für Entwickler, um sich in 15 Minuten mit Unterdiagrammen vertraut zu machen, hinzugefügt zur Antwort auf Unterdiagramme<br></br>Aktualisierte Antwort zum Unterbrechen des gehosteten Dienstes<br></br>Der Sonnenaufgang dezentralisierter Daten<br></br>So delegieren Sie Ihre GRT-Token mit einem Hardware Wallet-Tutorial, das der Wallet-Antwort hinzugefügt wurde<br></br>Die Vorteile der Verwendung von The Graph Network gegenüber Selbsthosting<br></br>Kurator-Tools<br></br>Tenderize-Dokumentation mit Graphtronauts „How to Stake“-Leitfaden aktualisiert<br></br>Wie man auswertet und feststellt, ob ein Subgraph legitim ist<br></br>Wie man ein effektiver Indexer wird<br></br>Web3 Dev KOSTENLOS lernen<br></br>Wie man das Graph-Protokoll für On-Chain-Daten mit Python abfragt<br></br>Graphtronauts FAQ for Delegators blog<br></br>Messari zu Core Devs hinzugefügt< br></br>Stellenangebote bei The Graph<br></br>GraphQL API<br></br>Q2 2022 Vierteljährliches GRT-Teilnehmer-Update<br></br>Update der Fire Hose-Dokumentation<br></br >Coinbase Wallet delegieren<br></br>iPhone synchronisiert Ihre MetaMask-Informationen mit iCloud?!<br></br>Wie funktionieren Web3 dApps?<br></br>Soulbound Studio<br></br>Und mehr!</h3>
        <hr className="QB-about-hr"></hr>
        <h3 className="QB-about-page-subtitle">Live-Daten / Statistiken</h3>
        <h3 className="QB-about-page-text">Anzahl der aktiven Delegatoren<br></br>Anzahl der aktiven Delegierten<br></br>Anzahl der Inhaber<br></br>Anzahl der Subgraphen<br></br>Anzahl der Kuratoren<br></br>Anzahl der aktiven Indexer <br></br>Anzahl der Abfragegebühren insgesamt<br></br>Gesamte GRT mit Einsatz<br></br>Von Delegatoren delegierte GRT insgesamt<br></br>Von Kuratoren signalisierte GRT insgesamt<br></ br>Gesamt delegierte BRT von Indexern<br></br>Gesamt verbrannte BRT</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Delegierter</h2>
        <h3 className="QB-about-page-text">Wie hoch ist die Anzahl der aktiven Delegierenden?<br></br>Wie hoch ist die von den Delegierenden insgesamt delegierte BRT?<br></br>Was sind Delegator-Belohnungen?<br></br>Was ist ein Delegierter?<br></br>Wie delegiere ich?<br></br>Wie hoch sind die Delegationsgebühren?<br></br>Kann ich mit einem Wallet delegieren?<br></br>Wie lange delegieren?<br></br>Was ist Benzin?<br></br>Was ist Liquid Staking?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Indexierer</h2>
        <h3 className="QB-about-page-text">Was ist ein Indexer?<br></br>Wie hoch ist die Anzahl der aktiven Indexer?<br></br>Wie hoch ist die von Indexern insgesamt delegierte GRT?<br></br>Wie wähle ich einen Indexer aus?<br br></br>Was sind die Hardwareanforderungen für die Indizierung?<br></br>Indexer-Bürozeiten<br></br>Was ist die Indexer-Belohnungskürzung?<br></br>Wie viel BRT muss ich muss ich ein Indexer werden?<br></br>Standort des Indexers<br></br>Wie vergleiche ich Indexer?<br></br>Welche Tools kann ich verwenden, um einen Indexer zu finden?<br></br>Wie viele GRT-Token benötige ich, um Indexer zu werden?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Kurator</h2>
        <h3 className="QB-about-page-text">Was ist die Anzahl der Kuratoren?<br></br>Wie hoch ist die von Kuratoren signalisierte Gesamt-BRT?<br></br>Was ist ein Kurator?<br></br>Was ist eine Bindungskurve?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Untergraph</h2>
        <h3 className="QB-about-page-text">Was ist ein Unterdiagramm?<br></br>Wie signalisiere ich ein Unterdiagramm?<br></br>Wie verifiziere ich ein Unterdiagramm?<br></br>Was zählen die Unterdiagramme?<br></br>Wie erhalte ich die Subgraphen-ID aus dem ipfs-Hash?<br></br>Wie erstelle ich einen Subgraphen?<br></br>Wie stelle ich einen Subgraphen bereit?<br></br>Wie Ich migriere einen Untergraphen vom gehosteten Dienst zum Mainnet?<br></br>Was ist eine Zuweisung?<br></br>Welche Kurse sind verfügbar?<br></br>Was ist der Unterschied zwischen gehostet und Mainnet? <br></br>Was ist der gehostete Dienst?<br></br>Was ist die Beendigung des gehosteten Dienstes?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Erfahren Sie mehr über den Graphen</h2>
        <h3 className="QB-about-page-text">Was ist die Graph Foundation?<br></br>Was ist der Graph Council?<br></br>Wer sind die Gründungsmitglieder des Graph?<br></br>Wer finanziert den Graph?< br></br>Wer sind die Kernentwickler?<br></br>Was ist Graph?<br></br>Was ist Edge & Node?<br></br>Was ist Graph Day?< br></br>Was ist Graph-Hack?<br></br>Führt der Graph Airdrops aus?<br></br>Gibt es eine Möglichkeit, kostenlose GRT zu erhalten?<br></br>Was ist der Github-Adresse für die Grafik?<br></br>Wo finde ich die Roadmap?<br></br>Welches Schema wird von der Grafik verwendet?<br></br></h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Gemeinschaft</h2>
        <h3 className="QB-about-page-text">Was ist der offizielle Graph-Discord-Server?<br></br>Was ist das Graph-Telegramm?<br></br>Wo finde ich die Graph-Community?<br></br>Was sind die Graphtronauten?<br ></br>Was ist ein Anwalt?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Abfragegebühren</h2>
        <h3 className="QB-about-page-text">Was sind Abfragegebühren?<br></br>Wie werden Indizierungsprämien und Abfragegebühren verteilt?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Tokenomik</h2>
        <h3 className="QB-about-page-text">Was sind die Tokenonomien?<br></br>Was sind Token-Unlocks?<br></br>Was ist Token-Versorgung?<br></br>Was ist die GRT-Token-Adresse?<br></br> Was ist eine Epoche?</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Kernentwickler | Tag der Graph </h2>
        <h3 className="QB-about-page-text">Wer sind die Kernentwickler?<br></br>Was ist Graph Ops?<br></br>Was ist Geo?<br></br>Was sind Substreams?<br></br>Was ist Streamingfast ?<br></br>Was ist die Gilde?<br></br>Was ist Semiotik?<br></br>Was ist Erfindung?<br></br>Was ist Firehose?<br></br>Graph-Tag<br></br>Graph-Hack</h3>
        <hr className="QB-about-hr"></hr>
        <h2 className="QB-about-page-subtitle">Web lernen 3</h2>
        <h3 className="QB-about-page-text">Frauen in Web 3<br></br>Welche Kurse gibt es?<br></br>Was ist Web3?<br></br>Was ist eine Blockchain?<br></br>Ist Blockchain sicher? <br></br>Was ist Kryptowährung?<br></br>Was ist Ethereum?<br></br>Was ist Proof of Work?<br></br>Was ist Proof of Stake?<br ></br>Was ist ein Stable Coin?<br></br>Was ist der Unterschied zwischen einem Coin und einem Token?<br></br>Was ist ein CEX?<br></br>Was ist a dex?<br></br>Was ist Layer Two?<br></br>Was ist zkproof?<br></br>Was ist ein Smart Contract?<br></br>Was ist ein nft ?<br></br>Was ist Mining?<br></br>Was sind Nodes?<br></br>Was ist ein Token Burn?<br></br>Was ist ein Dao?<br ></br>Was ist zksnark?<br></br>Was ist zkstark?<br></br>Was ist das Metaverse?</h3>
        </div>
</div>
<GERChatbotFooter className="chatbot-footer-mobile" />
       </>
    );
  }});

export default GERTranslatorHelp;