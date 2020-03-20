import React from "react";

export default function CharacterCard(props) {
  const {name, status, image} = props.chara;
  return (
    <div>
      <img src = {image} />
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </div>
  );
}
