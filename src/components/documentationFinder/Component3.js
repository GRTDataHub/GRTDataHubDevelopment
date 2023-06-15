import React from 'react';
import DocumentationFinder from './DocumentationFinder';

function Component3() {
  return (
    <div>
      <DocumentationFinder>
        <h1>Component3</h1>
        <p>
          In this tutorial, we will learn how to build a React app from scratch.
          We will cover topics such as components, state, props, and more.
        </p>
        <h2>Getting Started</h2>
        <p>
          To get started, make sure you have Node.js installed on your computer.
          You can download it from the official Node.js website.
        </p>
      </DocumentationFinder>
    </div>
  );
}

Component3.searchTerm = "component3";

export default Component3;