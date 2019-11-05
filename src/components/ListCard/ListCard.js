import React from 'react';
import PropTypes from 'prop-types';

const ListCard = ({ image, name, _id, handleCharacter }) => (
  <div onClick={() => handleCharacter(_id)}>
    <img src={image} />
    <p>{name}</p>
  </div>
);

ListCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.name.isRequired,
  _id: PropTypes.object.isRequired,
  handleCharacter: PropTypes.func.isRequired
};

export default ListCard;
