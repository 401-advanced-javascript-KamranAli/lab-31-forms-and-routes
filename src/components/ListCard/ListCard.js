import React from 'react';
import PropTypes from 'prop-types';

const ListCard = ({ image, name }) => {

  return (
    <>
      <img src={image} />
      <p>{name}</p>
    </>
  );
};

ListCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.name
};

export default ListCard;
