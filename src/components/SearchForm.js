import React, { useState } from 'react';
import ItemsList from './ItemsList';
import styled from 'styled-components';

const BigInputBar = styled.input`
    width: 40%;
    height: 40px;
    min-width: 300px;
    max-width: 600px;
    font-size: 1.5rem;
    margin-bottom: 20px;
`
const Container = styled.div`
    width:100%;
`
const SearchForm = () => {

  const [query, setQuery] = useState({
    name: "",
    dropVal: "",
  })

  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }

  const handleSelectChange = (dropdown) => {
    setQuery({ ...query, dropVal: dropdown.value})
  }

  return (
    <Container>
      <form> {/*if onSubmit is required you'll need to build out onSearch:  onSubmit={() => onSearch(query)}*/}
        {/* <p>Select search type:</p>        
        <select name="search type" onChange={handleSelectChange}> 
          <option value="name">name</option>
          <option value="northern_season">months available</option>
          <option value="location">location</option>
        </select> */}

        <BigInputBar
          onChange={handleInputChange}
          placeholder="search for bugs, fish, or sea critters"
          value={query.name}
          name="name"
        />

        {/* <button type="submit">Search</button> */}
      </form>
      <ItemsList query={query}/>
    </Container>
  );
}

export default SearchForm;