import React from 'react';
import '../../App.css';
import Navbar2 from "../navbars/Navbar2";
import Indexer from '../indexer/Indexer';

const IndexerMain = () => ({ 
  render(){
      return (
        <>
        <Navbar2 />
        <Indexer /> 
       </>
    );
  }});

export default IndexerMain;