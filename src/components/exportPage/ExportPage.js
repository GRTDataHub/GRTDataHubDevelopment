import React from 'react';
import '../../App.css';
import ExportNavbarMonitor from "./exportNavbar/ExportNavbarMonitor";
import ExportNavbarMobile from "./exportNavbar/ExportNavbarMobile";
import ExportMain from './ExportMain';
import ScrollButton from "../scrollButton/ScrollButton";

const ExportPage = () => ({ 
  render(){
      return (
        <>
        <div className="monitor-config"><ExportNavbarMonitor /></div>
        <div className="mobile-config"><ExportNavbarMobile /></div>
        <ExportMain />
        <ScrollButton />
       </>
    );
  }});

export default ExportPage;