import React, { Component } from 'react';

export default class HomePage extends Component {

  state = {
    image: ''

  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
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
