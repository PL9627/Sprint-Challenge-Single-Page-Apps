import React from "react";
import styled from 'styled-components';

const Head = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: 0 0 2% 25%;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Head>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Head>
    </section>
  );
}
