import React, {Component} from 'react';
import CardImages from '../components/CardImages.js';
import GuessPerson from '../components/GuessPerson.js';
import GuessCharacteristics from '../components/GuessCharacteristic.js';

class GameContainer extends Component {

  constructor(props){
    super(props)
      this.state = {
        win: null,
        people: [
          {
          name: "Kris",
          gender: "Male",
          hair: "Brown",
          glasses: false,
          facialhair: true,
          image: "/images/kris.jpg"
        },
          {
          name: "Euan",
          gender: "Male",
          hair: "Black",
          glasses: true,
          facialhair: false,
          image: "/images/euan.jpg"
        },
          {
          name: "Ben",
          gender: "Male",
          hair: "Brown",
          glasses: false,
          facialhair: true,
          image: "/images/ben.jpg"
        },
          {
          name: "Pawel",
          gender: "Male",
          hair: "Bald",
          glasses: false,
          facialhair: true,
          image: "/images/pawel.jpg"
        },
          {
          name: "Rod",
          gender: "Male",
          hair: "White",
          glasses: false,
          facialhair: false,
          image: "/images/rod.jpg"
        },
          {
          name: "James",
          gender: "Male",
          hair: "Bald",
          glasses: false,
          facialhair: true,
          image: "/images/james.jpg"
        },
          {
          name: "Hamish",
          gender: "Male",
          hair: "Bald",
          glasses: false,
          facialhair: true,
          image: "/images/hamish.jpg"
        },
          {
          name: "Matthew",
          gender: "Male",
          hair: "gray",
          glasses: false,
          facialhair: true,
          image: "/images/matthew.jpg"
        },
          {
          name: "Rose",
          gender: "Female",
          hair: "Brown",
          glasses: false,
          facialhair: false,
          image: "/images/rose.jpg"
        },
          {
          name: "Reka",
          gender: "Female",
          hair: "Brown",
          glasses: true,
          facialhair: false,
          image: "/images/reka.jpg"
        },
          {
          name: "Keith",
          gender: "Male",
          hair: "Brown",
          glasses: false,
          facialhair: false,
          image: "/images/keith.jpg"
        },
          {
          name: "Sian",
          gender: "Female",
          hair: "Brown",
          glasses: false,
          facialhair: false,
          image: "/images/sian.jpg"
        }

        ]
      }
      this.chosenPerson = this.choosePerson();
      this.checkWinner = this.checkWinner.bind(this);
      this.choosePerson = this.choosePerson.bind(this);
  }

  choosePerson(){
    const chosenIndex = Math.floor(Math.random() * 12)
    console.log(chosenIndex);
    const chosenPerson = this.state.people[chosenIndex].name;
    return chosenPerson;
  }


  checkWinner(selectedPerson){
      if (this.chosenPerson === selectedPerson){
        this.setState({win: true})
      }
      else {
        this.setState({win: false})
      }
      console.log(selectedPerson);
    }



  render(){
    if(this.state.win === false){
    return(
      <>
      <img id="logo" src = "/images/guesswho.png"/>
      <CardImages people={this.state.people}/>
      <GuessPerson checkWinner={this.checkWinner} />
      <GuessCharacteristics/>
      <h2>You guessed Wrong</h2>
      </>
    );
  }else if(this.state.win === true){
    return(
      <>
      <img id="logo" src = "/images/guesswho.png"/>
      <CardImages people={this.state.people}/>
      <GuessPerson checkWinner={this.checkWinner}/>
      <GuessCharacteristics/>
      <h2>You WIN!!!!!</h2>
      </>
    );
  }else{
    return(
      <>
      <img id="logo" src = "/images/guesswho.png"/>
      <CardImages people={this.state.people}/>
      <GuessPerson checkWinner={this.checkWinner}/>
      <GuessCharacteristics/>
      </>
    );
  }
  }
}

export default GameContainer;
