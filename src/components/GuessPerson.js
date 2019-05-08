import React, {Component} from 'react';

class GuessPerson extends Component{
  constructor(props){
    super(props)
      this.state = {name: "Choose your person"};
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
      event.preventDefault()
      const selectedPerson = this.state.name
      this.props.checkWinner(selectedPerson);
      console.log(selectedPerson);

  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Guess a person:
            <select value={this.state.name} onChange={this.handleChange}>
              <option value=""> </option>
              <option value="Kris">Kris</option>
              <option value="Reka">Reka</option>
              <option value="Rose">Rose</option>
              <option value="James">James</option>
              <option value="Euan">Euan</option>
              <option value="Hamish">Hamish</option>
              <option value="Ben">Ben</option>
              <option value="Rod">Rod</option>
              <option value="Keith">Keith</option>
              <option value="Sian">Sian</option>
              <option value="Pawel">Pawel</option>
              <option value="Matthew">Matthew</option>
            </select>
          </label>
          <input type="submit" value="Guess" />
        </form>
      );
    }

}


export default GuessPerson;
