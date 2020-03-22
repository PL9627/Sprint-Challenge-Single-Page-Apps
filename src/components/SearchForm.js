import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const data = ["https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"]

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const searchItems = data.filter(char => 
      char.toLowerCase().includes(searchTerm)
      );

    setSearchResults(searchItems);
  }, [searchTerm]);

  return (
    <section className="search-form">
        <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search"
        />
        <ul>
          {searchResults.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
