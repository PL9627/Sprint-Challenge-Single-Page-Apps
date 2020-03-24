import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 2% 0 2% 35%;
`;

const Search = styled.input`
  display: flex;
  margin: 5% 0 5% 42%;
`;

const Char = props => {
  const { name, status } = props;
  return (
    <div>
      <Card>
        <p>Name: {name}</p>
        <p>Status: {status}</p>
      </Card>
    </div>
  );
};

export default function SearchForm() {
  const [searchTerms, setSearchTerms] = useState([]);

  const [searchResults, setSearchResults] = useState("");

  const [filterChar, setFilterChar] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
      )
      .then(res => {
        //console.log(res.data.results);
        setSearchTerms(res.data.results);
      })
      .catch(err => console.log("Search Err", err));
  }, []);

  useEffect(() => {
    setFilterChar(
      searchTerms.filter(chars =>
        chars.name.toLowerCase().includes(searchResults.toLowerCase())
      )
    );
  }, [searchResults, searchTerms]);

  const handleChange = event => {
    setSearchResults(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <Search
          name="search"
          type="text"
          onChange={handleChange}
          placeholder="Search"
        />
      </form>
      {filterChar.map((searchTerms, idx) => (
        <Char key={idx} {...searchTerms} />
      ))}
    </section>
  );
}
