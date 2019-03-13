import React, { Component } from 'react';
import List from './List'
import Randomizer from './Randomizer'



class App extends Component {
    constructor(props){
      super(props)
      this.state = {
          //this gives a value to be put into the array
          newName: "",
          //this will be the empty array to push into
          namesList: ["Damon", "Alyssa", "Jez", "Enrique", "Kevin", "Madison"]
      };
    }

// componentDidMount() {
//     this.reset()
// }
// this arrow function shows the letters as you type them
    handleChange = (event) => {
        this.setState({newName: event.target.value});
    }
//

//this arrow function tells what to do with the name that's inputed into the text box.
    handleSubmit = (event) => {
     //making a copy of the state of the component
        let { namesList, newName } = this.state
        //pushing the new name into the copy
        namesList.push(newName)
        //setting state to the new updated names list
        newName = ""
        this.setState({namesList: namesList, newName: newName })
        event.preventDefault();
    }

    clearList = (event) => {
        this.setState({namesList:[]})
    }


    render() {
     // console.log(this.props.namesList);
        let names = this.state.namesList.map((name, index) => {
            return (
             //react likes having a key index
             //this lists the updated names list
             <li key={index}>{name}</li>
            )
        })

        return (
            <div class="grid-container">
                <div class = "card" >
                    <h2>Create List</h2>
                    <form>
                        <input id="textbox" type="text" name="name" value={this.state.newName}
                         onChange={this.handleChange} />
                         <br />
                        <button type="submit"  id ="button" onClick={this.handleSubmit}>Create List</button>
                    </form>
                </div>


            <List namesList={this.state.namesList} clearList={this.clearList.bind(this)} />
            <Randomizer namesList={this.state.namesList} />

            </div>
   );
 }
}

export default App
