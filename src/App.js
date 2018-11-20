import React, { Component } from 'react';
import PageHeader from "./PageHeader";
import PageInit from "./PageInit";

import "./bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader/>
        <PageInit />
      </div>
    );
  }
}

export default App;