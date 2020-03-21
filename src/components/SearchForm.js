import React, { useState } from "react";

export default function SearchForm(props) {
  const charas = props.charaList;

  const [searchName, setSearchName] = useState({
    name: ''
  })

  const handleChange = (event) => {
    setSearchName({...searchName, name: event.target.value})
  }

  const submitHandler = (event) => {
    event.preventDefault();

    props.setCharaList(charas.filter(characters => characters.name === searchName))
  }

  return (
    <section className="search-form">
     <form onSubmit = {submitHandler}>
      <input 
        type = 'text'
        name = 'name'
        placeholder = 'Search Characters'
        onChange = {handleChange}
        value = {searchName.name} />
      <button type = 'submit'>Search</button>
     </form>
    </section>
  );
}