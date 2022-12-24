import React from 'react';
import '../../App.css';
import Navbar3 from "../navbars/Navbar3";
import Delegator from '../delegator/Delegator';

const DelegatorsMain = () => ({ 
  render(){
      return (
        <>
        <Navbar3 />
        <Delegator /> 
       </>
    );
  }});

export default DelegatorsMain;