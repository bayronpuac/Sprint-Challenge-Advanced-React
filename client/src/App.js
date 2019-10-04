import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component{
  state = {
    players: []
  };
  
  componentDidMount() {
    axios
    .get("http://localhost:5000/api/players")
    .then (res => {
      console.log(res.data);
      this.setState({
        players: res.data
      });
    })
    .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}



export default App;
