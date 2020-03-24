import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default function App() {
  return (
    <main data-testid="app">
      <Header />
      <Nav className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/Characters" style={{ textDecoration: "none" }}>
          Character List
        </Link>
        <Link to="/Search" style={{ textDecoration: "none" }}>
          Search
        </Link>
      </Nav>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/Characters" component={CharacterList} />
      <Route path="/Search" component={SearchForm} />
    </main>
  );
}
