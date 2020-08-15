import React, { useState } from 'react';
import styled from 'styled-components';
import CharacterList from './CharacterList';

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
const ItemsPage = () => {

  const [query, setQuery] = useState({
    name: "",
    dropVal: ""
  })

  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }
  const handleSelectChange = (event) => {
    setQuery({ ...query, dropVal: event.target.value})
  }
  
  return (
    <Container>
      <form> 
        <BigInputBar
          onChange={handleInputChange}
          placeholder="type the name of an NPC"
          value={query.name}
          name="name"
        />
      </form>
      
      <p>Bday:</p>
      <select name="birthdays" onChange={handleSelectChange}>
          <option value="tbd">Select</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
      </select>

      <CharacterList query={query}/>
    </Container>
  );
}

export default ItemsPage;