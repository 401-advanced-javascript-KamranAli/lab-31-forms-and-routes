import React from 'react';
import PropTypes from 'prop-types';
import ListCard from '../../ListCard/ListCard';

const List = ({ list }) => {
  const listElements = list.map(listItem => (
    <li key={`${listItem.image}-${listItem.name}`}>
      <ListCard {...listItem} />
    </li>
  ));

  return (
    <>
      <h1>Check these characters out!</h1>
      <ul>
        {listElements}
      </ul>
    </>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    url: PropTypes.string
  }))
};

export default List;
