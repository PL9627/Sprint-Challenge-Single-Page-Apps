import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 2% 0 2% 35%;
`;
export default function CharacterCard(props) {
  return (
    <div>
      <Card>
        <p>Name: {props.name}</p>
        <p>Status: {props.status}</p>
      </Card>
    </div>
  );
}
