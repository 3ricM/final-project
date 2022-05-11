import React, {Component} from 'react';
import './App.css';
import CardExample from './Components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React App</h1>
        <CardExample/>
        
      </div>
    );
  }
}

export default App;
