import React, { Component } from 'react';
import './styles/App.css';
import ScrollView from './components/scroll-view';
import Comments from './components/comments';
import lesson3 from './data/lesson3.md';

console.log(lesson3)
class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
 
  componentWillMount(){
    //grabs the temp markdown
    const lesson3 = require('./data/lesson3.md')
    fetch(lesson3).then(
      res => { return res.text()}
    ).then(text => {
      this.setState({
        markdown: text
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>EYEQXL</h1>
        </div>
        <ScrollView markdown={this.state.markdown}/>
        <Comments />
      </div>
    );
  }
}

export default App;
