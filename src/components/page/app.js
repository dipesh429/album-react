import React, { Component } from 'react';
import { albums } from '../../mock/albums';

import { AddNew } from '../organism/AddNew/Index';
import { ListView } from '../organism/ListView/Index';

export class App extends Component {
  state = {
    new: {
      album_name: '',
      band_name: '',
      release_year: '',
      album_url: '',
      more_info: '',
      submitted_by: '',
      vote: 1,
    },
    total: albums,
  };

  handleVote = (index) => {
    this.setState((current) => {
      let final = [...current.total];
      let updateItem = { ...final[index] };
      final[index] = { ...updateItem, vote: ++updateItem.vote };
      return {
        new: current.new,
        total: final,
      };
    });
  };

  handleChange = (event) => {
    this.setState((current) => ({
      total: [...current.total],
      new: {
        ...current.new,
        [event.target.name]: event.target.value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((current) => ({
      total: [...current.total, this.state.new],
      //re-initialize
      new: {
        album_name: '',
        band_name: '',
        release_year: '',
        album_url: '',
        more_info: '',
        submitted_by: '',
        vote: 1,
      },
    }));
  };

  render() {
    return (
      <div className="wrapper">
        <p className="heading"> Popular Metal Albums</p>
        <ListView
          albums={this.state.total}
          handleVote={(index) => this.handleVote(index)}
        />
        <AddNew
          currentValue={this.state.new}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
