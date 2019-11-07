import React from 'react';
import PropTypes from 'prop-types';

const RandomCharacter = ({ image, handleRandom }) => (
  <>
    <img src={image} />
    <button className="new" onClick={handleRandom}>Get New Character</button>
  </>
);

RandomCharacter.propTypes = {
  image: PropTypes.string.isRequired,
  handleRandom: PropTypes.func.isRequired
};

export default RandomCharacter;
