import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RandomCharacter from '../../randomCharacter/randomCharacter';
import CharacterSearch from '../../searchComponent/searchForm';

export default class HomePage extends Component {

  state = {
    image: ''
  }

  changeImage = () => {
    const url = `http://last-airbender-api.herokuapp.com/api/v1/characters/${queries}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({ image: json });
      });
  }

  render() {
    return (
      <>
        <div>
          <img src={this.state.image} value="changeImage" />
          <button className="new">Get NewCharacter</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="query"></input>
            <button className="search">Search for Character</button>
          </div>
        </form>
      </>
    );
  }


}
