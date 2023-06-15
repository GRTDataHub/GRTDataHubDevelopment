import React from 'react';
import DocumentationFinder from './DocumentationFinder';
import '../../App.css';

function DocumentationFinderHome() {
  return (
    <div className='privacy-policy'>
      <DocumentationFinder searchTerm="Component1" />
    </div>
  );
}

export default DocumentationFinderHome;

