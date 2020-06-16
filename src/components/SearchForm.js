import React, { useState } from 'react';
import ItemsList from './ItemsList';

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
    <>
      <form> {/*if onSubmit is required you'll need to build out onSearch:  onSubmit={() => onSearch(query)}*/}
        {/* <p>Select search type:</p>        
        <select name="search type" onChange={handleSelectChange}> 
          <option value="name">name</option>
          <option value="northern_season">months available</option>
          <option value="location">location</option>
        </select> */}

        <input
          onChange={handleInputChange}
          placeholder="search for a bug or a fish"
          value={query.name}
          name="name"
        />

        {/* <button type="submit">Search</button> */}
      </form>
      <ItemsList query={query}/>
    </>
  );
}

export default SearchForm;