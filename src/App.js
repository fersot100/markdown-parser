import React, { Component } from 'react';
import './styles/App.css';
import ScrollView from './components/scroll-view';
import Comments from './components/comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">

        </div>
        <ScrollView/>
        <Comments />
      </div>
    );
  }
}

export default App;
