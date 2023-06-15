import React, { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

const components = [Component1, Component2, Component3];

const DocumentationFinder = ({ searchTerm }) => {
  const [searchTermState, setSearchTermState] = useState(searchTerm);

  const handleSearch = (event) => {
    setSearchTermState(event.target.value);
  };

  const filteredComponents = components.filter((component) =>
  component.name.toLowerCase().includes(searchTermState?.toLowerCase()) && searchTermState?.toLowerCase() === searchTerm.toLowerCase()
);


  return (
    <div>
      <input
        type="text"
        onChange={handleSearch}
        value={searchTermState}
        placeholder="Search"
      />
      {filteredComponents.map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};

export default DocumentationFinder;
