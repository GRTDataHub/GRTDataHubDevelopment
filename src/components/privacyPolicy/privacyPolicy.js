import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "./privacyPolicyNavbar";
import PrivacyPolicyMain from "./privacyPolicyMain";

const PrivacyPolicy = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <PrivacyPolicyMain />
       </>
    );
  }});

export default PrivacyPolicy;
