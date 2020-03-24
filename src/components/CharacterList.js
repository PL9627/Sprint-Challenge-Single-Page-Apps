import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charaList, setCharaList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
      )
      .then(res => {
        setCharaList(res.data.results);
      })
      .catch(err => console.log("Big Error!", err));
  }, []);

  return (
    <section className="character-list">
      <p>
        {charaList.map(chara => {
          console.log(chara);
          return (
            <CharacterCard
              key={chara.id}
              name={chara.name}
              status={chara.status}
            />
          );
        })}
      </p>
    </section>
  );
}
