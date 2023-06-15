import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";

const GraphAdvocatesSpotlight = () => {
  const handleDownload = (url, fileName) => {
    fetch(url).then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = fileName;
        alink.click();
      })
    })
  }

      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
            <h2 className="QB-about-page-subtitle">Welcome to the <strong>Graph Advocates Spotlight</strong> Page!</h2>
            <br></br> 
            <h2 className="QB-about-page-subtitle">What is it?</h2>
            <h3 className="QB-about-page-text">It is to showcase Graph Advocates who choose to participate by highlighting their interests and accomplishments both inside and outside of their role as an Advocate. Showcasing the Advocates publicly provides positive non-financial value by increasing their social network and receiving much deserved recognition for their contributions. I also highlights Advocates skills and interests, connecting them with fellow Advocates who share similar passions.<br></br><br></br>The newsletter also enables anyone to get or remain up to date on all the significant news, events, and data in The Graph Ecoystem each week, just by taking 10-12 minutes to read the <strong>Community Roundup</strong>, <strong>Advocate Events</strong>, and <strong>Data Depot</strong> sections of the newsletter.</h3><br></br><h3 className="QB-about-page-text">Created By <a className="chatbot-link" href='https://twitter.com/kylelarue11?s=21&t=aoe8RCwfwaOZ4FIUavFZrg' target="_blank" rel="noreferrer">Kyle</a>, GraphAdvocate & DAO Member.<br></br><strong>Note:</strong> All links within the PDFs work!</h3>
    
            <hr className="QB-about-hr"></hr>

            <h2 className="QB-about-page-subtitle">
              {/* <a className="chatbot-link" 
            onClick={() => handleDownload('Issue42-ENG.pdf', 'Issue #42 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #42 - Playgrounds Analytics</a> */}
            <a className="chatbot-link" href="https://twitter.com/KyleLaRue11/status/1667192800490684418?s=20" target="_blank" rel="noreferrer">Issue #42 - Playgrounds Analytics</a></h2>
          {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue42-URD.pdf', 'Issue #42 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 42 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue42-CHI.pdf', 'Issue #42 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第42期中文版</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue42-ESP.pdf', 'Issue #42 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #42 en español</a></h2> */}
             <br></br> 
            <h2 className="QB-about-page-subtitle">
              {/* <a className="chatbot-link" 
            onClick={() => handleDownload('Issue41-ENG.pdf', 'Issue #41 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #41 - Aguboss</a> */}
            <a className="chatbot-link" href="https://twitter.com/KyleLaRue11/status/1656805320553820162/photo/1" target="_blank" rel="noreferrer">Issue #41 - Aguboss</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue41-URD.pdf', 'Issue #41 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 41 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue41-CHI.pdf', 'Issue #41 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第41期中文版</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue41-ESP.pdf', 'Issue #41 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #41 en español</a></h2>
             <br></br> 
            <h2 className="QB-about-page-subtitle">
              {/* <a className="chatbot-link" 
            onClick={() => handleDownload('Issue40-ENG.pdf', 'Issue #40 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #40 - Alexey</a> */}
            <a className="chatbot-link" href="https://twitter.com/KyleLaRue11/status/1654606102842036226" target="_blank" rel="noreferrer">Issue #40 - Alexey</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue40-CHI.pdf', 'Issue #40 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第40期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue40-ESP.pdf', 'Issue #40 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #40 en español</a></h2>
             <br></br> 
            <h2 className="QB-about-page-subtitle">
              {/* <a className="chatbot-link" 
            onClick={() => handleDownload('Issue39-ENG.pdf', 'Issue #39 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #39 - Ivan Kwananda</a> */}
            <a className="chatbot-link" href="https://twitter.com/KyleLaRue11/status/1651813140663861248/photo/1" target="_blank" rel="noreferrer">Issue #39 - Ivan Kwananda</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue39-URD.pdf', 'Issue #39 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 39 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue39-CHI.pdf', 'Issue #39 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第39期中文版</a></h2>
             <br></br> 
            <h2 className="QB-about-page-subtitle">
              {/* <a className="chatbot-link" 
            onClick={() => handleDownload('Issue38-ENG.pdf', 'Issue #38 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #38 - Ecosystem News</a> */}
            <a className="chatbot-link" href="https://twitter.com/KyleLaRue11/status/1650208110399610881/photo/1" target="_blank" rel="noreferrer">Issue #38 - Ecosystem News</a>
            </h2>
             {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue38-ESP.pdf', 'Issue #38 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #38 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue38-FRA.pdf', 'Issue #38 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #38 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue38-URD.pdf', 'Issue #38 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 38 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue38-CHI.pdf', 'Issue #38 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第38期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue38-RUS.pdf', 'Issue #38 - RUS Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Выпуск №38 на русском языке</a></h2>
        <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue38-GER.pdf', 'Issue #38 - GER Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Ausgabe Nr. 38 auf Deutsch</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue38-ARA.pdf', 'Issue #38 - ARA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">العدد 38 باللغة العربية</a></h2> */}

             <br></br> 
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue37-ENG.pdf', 'Issue #37 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #37 - Jorge Flores</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue37-URD.pdf', 'Issue #37 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 37 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue37-CHI.pdf', 'Issue #37 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第37期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue37-ARA.pdf', 'Issue #37 - ARA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">العدد 37 باللغة العربية</a></h2>
             <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue36-ENG.pdf', 'Issue #36 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #36 - Don Daryl</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue36-URD.pdf', 'Issue #36 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 36 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue36-CHI.pdf', 'Issue #36 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第36期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue36-ARA.pdf', 'Issue #36 - ARA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">العدد 36 باللغة العربية</a></h2>
             <br></br>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue35-ENG.pdf', 'Issue #35 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #35 - Andy Schreiber</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue35-ESP.pdf', 'Issue #35 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #35 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue35-FRA.pdf', 'Issue #35 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #35 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue35-URD.pdf', 'Issue #35 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 35 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue35-CHI.pdf', 'Issue #35 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第35期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue35-ARA.pdf', 'Issue #35 - ARA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">العدد 35 باللغة العربية</a></h2>
             <br></br>
           <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue34-ENG.pdf', 'Issue #34 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #34 - Ben Abasiono</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue34-ESP.pdf', 'Issue #34 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #34 en español</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue34-URD.pdf', 'Issue #34 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 34 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue34-CHI.pdf', 'Issue #34 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第34期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue34-RUS.pdf', 'Issue #34 - RUS Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Выпуск №34 на русском языке</a></h2>
        <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue34-GER.pdf', 'Issue #34 - GER Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Ausgabe Nr. 34 auf Deutsch</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue34-ARA.pdf', 'Issue #34 - ARA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">العدد 34 باللغة العربية</a></h2>
             <br></br>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue33-ENG.pdf', 'Issue #33 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #33 - Graphica</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue33-ESP.pdf', 'Issue #33 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #33 en español</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue33-CHI.pdf', 'Issue #33 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第33期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue33-RUS.pdf', 'Issue #33 - RUS Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Выпуск №33 на русском языке</a></h2>
             <br></br>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue32-ENG.pdf', 'Issue #32 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #32 - Asad Ullah</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue32-ESP.pdf', 'Issue #32 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #32 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue32-FRA.pdf', 'Issue #32 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #32 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue32-URD.pdf', 'Issue #32 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 32 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue32-CHI.pdf', 'Issue #32 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第32期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue32-RUS.pdf', 'Issue #32 - RUS Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Выпуск №32 на русском языке</a></h2>
        <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue32-GER.pdf', 'Issue #32 - GER Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Ausgabe Nr. 32 auf Deutsch</a></h2>
             <br></br>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue31-ENG.pdf', 'Issue #31 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #31 - Phuture</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue31-ESP.pdf', 'Issue #31 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #31 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue31-FRA.pdf', 'Issue #31 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #31 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue31-URD.pdf', 'Issue #31 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 31 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue31-CHI.pdf', 'Issue #31 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第31期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue31-RUS.pdf', 'Issue #31 - RUS Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Выпуск №31 на русском языке</a></h2>
        <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue31-GER.pdf', 'Issue #31 - GER Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Ausgabe Nr. 31 auf Deutsch</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue30-ENG.pdf', 'Issue #30 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #30 - DappLooker</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue30-ESP.pdf', 'Issue #30 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #30 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue30-FRA.pdf', 'Issue #30 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #30 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue30-URD.pdf', 'Issue #30 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 30 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue30-CHI.pdf', 'Issue #30 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第30期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue30-RUS.pdf', 'Issue #30 - RUS Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Выпуск №30 на русском языке</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue29-ENG.pdf', 'Issue #29 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #29 - Constantin Promesse Juste</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue29-ESP.pdf', 'Issue #29 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #29 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue29-FRA.pdf', 'Issue #29 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #29 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue29-URD.pdf', 'Issue #29 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 29 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue29-CHI.pdf', 'Issue #29 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第29期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue29-RUS.pdf', 'Issue #29 - RUS Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Выпуск №29 на русском языке</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue28-ENG.pdf', 'Issue #28 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #28 - Sablier</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue28-ESP.pdf', 'Issue #28 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #28 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue28-FRA.pdf', 'Issue #28 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #28 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue28-URD.pdf', 'Issue #28 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 28 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue28-CHI.pdf', 'Issue #28 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第28期中文版</a></h2>
             <br></br>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue27-ENG.pdf', 'Issue #27 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #27 - Thomas Freestone</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue27-ESP.pdf', 'Issue #27 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #27 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue27-FRA.pdf', 'Issue #27 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #27 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue27-URD.pdf', 'Issue #27 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 27 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue27-CHI.pdf', 'Issue #27 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第27期中文版</a></h2>
             <br></br>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue26-ENG.pdf', 'Issue #26 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #26 - Livepeer</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue26-FRA.pdf', 'Issue #26 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #26 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue26-URD.pdf', 'Issue #26 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 26 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue26-CHI.pdf', 'Issue #26 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第26期中文版</a></h2>
             <br></br>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue25-ENG.pdf', 'Issue #25 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #25 - Freddy Murillo Jr.</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue25-FRA.pdf', 'Issue #25 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #25 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue25-URD.pdf', 'Issue #25 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 25 اردو میں</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue25-CHI.pdf', 'Issue #25 - CHI Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">第25期中文版</a></h2>
             <br></br>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue24-ENG.pdf', 'Issue #24 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #24 - Premia</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue24-FRA.pdf', 'Issue #24 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #24 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue24-URD.pdf', 'Issue #24 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 24 اردو میں</a></h2>
             <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue23-ENG.pdf', 'Issue #23 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #23 - Michael</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue23-ESP.pdf', 'Issue #23 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #23 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue23-FRA.pdf', 'Issue #23 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #23 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue23-URD.pdf', 'Issue #23 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 23 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue22-ENG.pdf', 'Issue #22 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #22 - Max Savant Hazelhurst</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue22-ESP.pdf', 'Issue #22 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #22 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue22-FRA.pdf', 'Issue #22 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #22 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue22-URD.pdf', 'Issue #22 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 22 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue21-ENG.pdf', 'Issue #21 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #21 - Gabriel Nicolas Gonzalez</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue21-ESP.pdf', 'Issue #21 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #21 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue21-FRA.pdf', 'Issue #21 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #21 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue21-URD.pdf', 'Issue #21 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 21 اردو میں</a></h2>
            <br></br>  
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue20-ENG.pdf', 'Issue #20 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #20 - Luke Pillarella</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue20-ESP.pdf', 'Issue #20 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #20 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue20-FRA.pdf', 'Issue #20 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #20 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue20-URD.pdf', 'Issue #20 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 20 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue19-ENG.pdf', 'Issue #19 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #19 - Bertrand Armando Iratchet</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue19-ESP.pdf', 'Issue #19 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #19 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue19-FRA.pdf', 'Issue #19 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #19 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue19-URD.pdf', 'Issue #19 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 19 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue18-ENG.pdf', 'Issue #18 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #18 - Paul Barba</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue18-ESP.pdf', 'Issue #18 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #18 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue18-FRA.pdf', 'Issue #18 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #18 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue18-URD.pdf', 'Issue #18 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 18 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue17-ENG.pdf', 'Issue #17 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #17 - Maksim</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue17-ESP.pdf', 'Issue #17 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #17 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue17-FRA.pdf', 'Issue #17 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #17 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue17-URD.pdf', 'Issue #17 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 17 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue16-ENG.pdf', 'Issue #16 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #16 - Beau Zabdiel Valoria</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue16-ESP.pdf', 'Issue #16 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #16 en español</a></h2>
              <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue16-FRA.pdf', 'Issue #16 - FRA Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #16 en français</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue16-URD.pdf', 'Issue #16 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 16 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue15-ENG.pdf', 'Issue #15 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #15 - Ahmad Mardeni</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue15-ESP.pdf', 'Issue #15 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #15 en español</a></h2>
          <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue15-URD.pdf', 'Issue #15 - URD Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">شمارہ نمبر 15 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue14-ENG.pdf', 'Issue #14 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #14 - Silka</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue14-ESP.pdf', 'Issue #14 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #14 en español</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue13-ENG.pdf', 'Issue #13 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #13 - Olaoluwa Tunmise</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue13-ESP.pdf', 'Issue #13 - ESP Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #13 en español</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue12-ENG.pdf', 'Issue #12 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #12 - Latsan</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue11-ENG.pdf', 'Issue #11 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #11 - CryptoReuMD</a></h2>
            <br></br> 
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue10-ENG.pdf', 'Issue #10 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #10 - Colson</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue9-ENG.pdf', 'Issue #9 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #9 - Tim Seip</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue8-ENG.pdf', 'Issue #8 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #8 - Onur Sarayli and Yaraslau Zubrytski</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue8-ENG.pdf', 'Issue #8 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #7 - Lorena and Kevin Jones</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue6-ENG.pdf', 'Issue #6 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #6 - Paolo Diomede and Alexander</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue5-ENG.pdf', 'Issue #5 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #5 - Tony Wang and Vasily Istomin</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue4-ENG.pdf', 'Issue #4 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #4 - Dr. Jimoh Sahid and Vadym Kushnir</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue3-ENG.pdf', 'Issue #3 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #3 - Ugochukwu Agu and Alexey Shustov</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue2-ENG.pdf', 'Issue #2 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #2 - David Dumitrescu and Matias Hernandez</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            onClick={() => handleDownload('Issue1-ENG.pdf', 'Issue #1 - Graph Advocates Spotlight.pdf')} 
            target="_blank" rel="noreferrer">Issue #1 - Paul Barba and Chidubem Okeke</a></h2>
            </div>
      </div>
    </>
  );
}

export default GraphAdvocatesSpotlight;
