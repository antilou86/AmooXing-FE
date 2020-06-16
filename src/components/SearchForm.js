import React, { useState } from 'react';

const SearchForm = () => {

  const [query, setQuery] = useState({
    name: ""
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }

  return (
    <section className="search-form">
      <form> {/*if onSubmit is required you'll need to build out onSearch:  onSubmit={() => onSearch(query)}*/}
        <input
          onChange={handleInputChange}
          placeholder="search for a bug or a fish"
          value={query.name}
          name="name"
        />
        {/* <button type="submit">Search</button> */}
      </form>
    </section>
  );
}

export default SearchForm;