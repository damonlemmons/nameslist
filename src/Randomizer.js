import React, { Component } from 'react';
import App from './App.js'


class Randomizer extends Component {
    constructor(props){
      super(props)
      this.state = {
        randomName: ""
    };
}


    randomizer = () => {
            let { namesList } = this.props
        console.log(namesList)

        let random = namesList[Math.floor(Math.random()*namesList.length)]
        console.log(random)

        while (random == this.state.randomName) {
            random = namesList[Math.floor(Math.random()*namesList.length)]
            console.log("found duplicate")
        }

        this.setState({randomName: random})

    }




    render() {
        let randomName = this.state.randomName

        return(

            <div class="card">
                <input type="submit" value="Randomizer"  onClick = {this.randomizer} />

                <h1>{randomName}</h1>
           </div>

        );
    }
    }


export default Randomizer;
