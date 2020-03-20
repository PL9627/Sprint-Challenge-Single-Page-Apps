import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Status: {props.status}</p>
    </div>
  );
}
