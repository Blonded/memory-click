import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import "./App.css";

//npm packages for shuffle
const shuffleArr = require('shuffle-array');


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    highScore: 0,
  };

shuffle = () => {
  let friends = this.state.friends;
  shuffleArr(friends);
  this.setState({ friends });
}

clicked = (id) => {
  this.shuffle();
}


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar />
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={this.clicked}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}


/// KEEP HIGH SCORE/ Current score js here

export default App;
