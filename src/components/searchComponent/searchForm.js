import React from 'react';
import PropTypes from 'prop-types';

const CharacterSearch = ({ handleSubmit, handleChange, searchQuery }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" value={searchQuery} onChange={handleChange}></input>
      <button className="search">Search for Character</button>
    </form>
  );
};

CharacterSearch.propTypes = {
  handleSubmit: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.func.isRequired,

};

export default CharacterSearch;
