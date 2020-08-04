import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemsList from './ItemsList';
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
    dropVal: "",
    birthdays: []
  })

  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }

  const handleSelectChange = (dropdown) => {
    setQuery({ ...query, dropVal: dropdown.value})
  }
  //grab birthdays and fill drop bar with those vals

  useEffect(() => {
      const getBirthdays = () => {
          axios
            .get('https://amoo-xing.herokuapp.com/villagers')
            .then(response => {
                for(const character of response.data) {
                    setQuery(...query, character.birthday)
            }})
            .catch(error => {console.error('SERVER ERROR: whoa whoa whoa', error)})
      }
      getBirthdays()
  },[])


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
      
      <p>Select a birthday from the list:</p>
      <select name="birthdays" onChange={handleSelectChange}>
          {query.birthdays.map((bday,key) => <option key={key}>{bday}</option>)}
      </select>

      <CharacterList query={query}/>
    </Container>
  );
}

export default ItemsPage;