import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const [data, setData] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(res => {
      setData(res.data.results)
    })
    .catch(err => console.log('ERROR', err));

    const searchItems = data.filter(char => {
      console.log(char)
    });

    setSearchResults(searchItems);
  }, [searchTerm]);

  return (
    <section className="search-form">
      <input
        type = 'text'
        value = {searchTerm}
        onChange ={handleChange}
        placeholder = 'Search'
         />
      <button type = "submit">Search</button>
    </section>
  );
}