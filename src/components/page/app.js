import React, { Component } from 'react';

import { AddNew } from '../organism/AddNew/Index';


export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <p className="heading"> Popular Metal Albums</p>
        <AddNew />
      </div>
    );
  }
}

export default App;
