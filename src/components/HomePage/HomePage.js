import React from 'react';
import PropTypes from 'prop-types';

function HomePage({ image }) {

  return (
    <>
      <div>
        <img src={image} />
        <button>Get New Character</button>
      </div>
      <form>
        <div>
          <input type="text" name="query" onChange=""></input>
          <button>Search for Character</button>
        </div>
      </form>
    </>
  );
}

HomePage.propTypes = {
  image: PropTypes.string
};

export default HomePage;
