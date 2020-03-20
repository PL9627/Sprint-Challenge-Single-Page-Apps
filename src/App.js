import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
    </main>
  );
}
