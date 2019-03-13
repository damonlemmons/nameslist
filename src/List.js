import React, { Component } from 'react';
import App from './App.js'


class List extends Component {

    render() {
        console.log(this.props.namesList);
        let names = this.props.namesList.map((name, index) => {
            return (
                //react likes having a key index
                //this lists the updated names list
                <li key={index}>{name}</li>
            )
        })


        return (
            <div class = "card" >
                <h1>List of Names</h1>
                <ul>
                    <h2>{names}</h2>
                </ul>
                <input type="submit" value="Clear List"  onClick={this.props.clearList} />
            </div>
        );
    }
}

export default List;
