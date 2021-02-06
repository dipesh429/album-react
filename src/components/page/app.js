import React, { Component } from 'react';
import { albums } from '../../mock/albums';

import { AddNew } from '../organism/AddNew/Index';
import { ListView } from '../organism/ListView/Index';

export class App extends Component {
  state = {
    total: albums,
  };
  render() {
    return (
      <div className="wrapper">
        <p className="heading"> Popular Metal Albums</p>
        <ListView albums={this.state.total} />
        <AddNew />
      </div>
    );
  }
}

export default App;
