import React, { Component } from 'react';
import List from './List'

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
          //this gives a value to be put into the array
          newName: "",
          //this will be the empty array to push into
          namesList: []
      };
 }

//this arrow function shows the letters as you type them
 handleChange = (event) => {
   this.setState({newName: event.target.value});
 }

//this arrow function tells what to do with the name that's inputed into the text box.
 handleSubmit = (event) => {
     //making a copy of the state of the component
    let { namesList, newName } = this.state
    //pushing the new name into the copy
    namesList.push(newName)
    //setting state to the new updated names list
    this.setState({namesList: namesList})
    event.preventDefault();
 }

 render() {
   return (
        <div>
            <form>
                <div>Enter Name</div>
                <input type="text" name="name" value={this.state.newName}
                 onChange={this.handleChange} />
                <input type="submit" value="Submit"  onClick={this.handleSubmit.bind(this)}/>
            </form>
            <List namesList={this.state.namesList}/>
        </div>
   );
 }
}

export default App
