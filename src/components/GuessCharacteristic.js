import React, { Component }from 'react'

class GuessCharacteristics extends Component {
  constructor(props){
  super(props)
  this.state = {
    characteristicsList:[
      { characteristics: 'gender', value: ['Male', 'Female',]},
      { characteristics: 'hairColour', value: ['Brown', 'Black', 'Gray', 'Bald']},
      { characteristics: 'glasses', value: [true, false]},
      { characteristics: 'facialHair', value: [true, false]}
    ]
  }

}

  handleChange(){
    /*depending on the selection second dropdown list has to list array associated with characteristics in array. We want a new dropdowhn
    to be create*/
  }



 render(){
   return(
  <form>
   <label>
    Choose Characteristic
    <select value={this.state.characteristicsList} onChange={this.handleChange}>
      <option value=""> </option>
      <option value="gender">Gender</option>
      <option value="hairColour">Hair Colour</option>
      <option value="glasses">Glasses?</option>
      <option value="facialHair">Facial Hair?</option>
    </select>
   </label>
  </form>

  // if (this.state.characteristicsList === 'gender') {
  //   return (
  //   <form>
  //    <label>
  //     Choose Characteristic
  //     <select value={this.state.characteristicsList} onChange={this.handleChange}>
  //       <option value=""> </option>
  //       <option value="male">Male</option>
  //       <option value="female">Female</option>
  //
  //     </select>
  //    </label>
  //   </form>
  // )
  // }


  )
  }

}

export default GuessCharacteristics;
