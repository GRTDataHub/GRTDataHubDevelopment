


import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";
import CookiesPolicyMain from "./cookiesPolicyMain";

const CookiesPolicy = () => ({ 
  render(){
      return (
        <>
        <PrivacyPolicyNavbar />
        <CookiesPolicyMain />
       </>
    );
  }});

export default CookiesPolicy;