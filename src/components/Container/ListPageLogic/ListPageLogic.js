import React, { Component } from 'react';
import ListPage from '../../ListPage/ListPage';
import apiCall from '../../../services/apiCall';

export default class ListLogic extends Component {
  state = {
    characters: []
  }

  handleCharacter = (id) => {
    apiCall(id)
      .then(([{ image }]) => {
        this.setState({ image });
      });
  }

  render() {
    return (
      <div>
        <ListPage characters={this.state.characters} handleCharacter={this.handleCharacter} />
      </div>
    );
  }
}
