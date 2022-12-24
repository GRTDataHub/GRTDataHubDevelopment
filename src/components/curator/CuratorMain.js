import React from 'react';
import '../../App.css';
import Navbar4 from "../navbars/Navbar4";
import Curator from '../curator/Curator';

const CuratorMain = () => ({ 
  render(){
      return (
        <>
        <Navbar4 />
        <Curator /> 
       </>
    );
  }});

export default CuratorMain;