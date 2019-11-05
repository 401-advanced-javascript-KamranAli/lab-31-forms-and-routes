import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RandomCharacter from '../../randomCharacter/randomCharacter';
import CharacterSearch from '../../searchComponent/searchForm';
import apiCall from '../../../services/apiCall';

export default class HomePage extends Component {

  state = {
    image: ''
  }

  componentDidMount() {
    apiCall('random')
      .then(([{ image }]) => {
        this.setState({ image });
      });
  }

  handleSubmit = event => {
    event.preventDefault();

    apiCall('random')
      .then(([{ image }]) => {
        this.setState({ image });
      });
  }

  handleRandom = () => {
    apiCall('random')
      .then(([{ image }]) => {
        this.setState({ image });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {

    const randomCharacter = {
      image: this.state.image,
      handleRandom: this.handleRandom
    };

    const characterSearch = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      searchQuery: this.state.searchQuery
    };

    return (
      <div>
        <RandomCharacter {...randomCharacter} />
        <CharacterSearch {...characterSearch} />
      </div>
    );
  }
}
