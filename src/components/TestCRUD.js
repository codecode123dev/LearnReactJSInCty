import React from "react";
import { useState } from "react";


var information = [
    {
        name: 'minh',
        age: '22',
        address: 'HN'
    }
]


export class Product extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            information : information,
            inputName : '',
            inputAge : '',
            inputAddress : '',
        }
    }

    changeName = (event) =>{
        this.setState ({inputName : event.target.value})
    }


    changeAge = (event) => {
        this.setState ({inputAge : event.target.value})
    }

    changeAddress = (event) => {
        this.setState({inputAddress : event.target.value})
    }

    render(){
        return(
            <div>
                <div>
                    <label>Name: </label>
                    <input value={this.state.inputName} onChange={this.changeName}/>
                </div>
                <div>
                    <label>Age: </label>
                    <input value={this.state.inputAge} onChange={this.changeAge}/>
                </div>
                <div>
                    <label>Address: </label>
                    <input value={this.state.inputAddress} onChange={this.changeAddress}/>
                </div>
            </div>
            
        )
    }

}