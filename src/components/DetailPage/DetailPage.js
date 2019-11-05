import React from 'react';
import PropTypes from 'prop-types';

const DetailCard = ({ name, image, gender, hair, affiliation }) => {

  return (
    <>
      <p>{name}</p>
      <p>{image}</p>
      <p>{gender}</p>
      <p>{hair}</p>
      <p>{affiliation}</p>
    </>
  );
};

DetailCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  gender: PropTypes.string,
  hair: PropTypes.string,
  affiliation: PropTypes.string
};
