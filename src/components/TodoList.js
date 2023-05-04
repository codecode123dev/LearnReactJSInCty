import React from "react";

import { useEffect, useState } from "react";
import { toDoList } from "../css/toDoList.css";

var information = [
    {
        id: 1,
        name: "minh",
        age: "18",
        address: "HN",
    },
];

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            information,
            name: '',
            age: '',
            address: ''
        }
    }

    edit = (item) => {
        this.setState({

            name: item.name,
            age: item.age,
            address: item.address,
        });
    }

    myChangeName = (event) => {
        this.props.inputEditName(event);
    }


    myChangeAge = (event) => {
        this.props.inputEditAge(event);
    }

    myChangeAddress = (event) => {
        this.props.inputEditAddress(event)
    }

    // updateItem = () => {
    //     this.setState({
    //         ...information,
    //         name: this.state.inputEditName,
    //         age: this.state.inputEditAge,
    //         address: this.state.inputEditAddress
    //     })
    // }

    updateItem = () =>{
        this.props.onUpdate()
    }

    


    render() {
        return (

            
            <div className="">
                <div className="">
                    <label>Name</label>
                    <input type="text" name="" className="" onChange={this.myChangeName} value={this.props.name} />
                </div>
                <div className="">
                    <label>Age</label>
                    <input type="text" name="" className="" onChange={this.myChangeAge} value={this.props.age} />
                </div>
                <div className="">
                    <label>Address</label>
                    <input type="text" name="" className="" onChange={this.myChangeAddress} value={this.props.address} />
                </div>
                    <button type="button" className="" onClick={this.updateItem} >Update</button>
            </div>
        )
    }
}

class ToDoItem extends React.Component {

    delete = (id) => {
        this.props.onDelete(id)
    }

    edit = (item) => {
        this.props.onEdit(item)
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.information.map((item, index) => (
                            <>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button onClick={() => this.delete(item.id)}>Delete</button>
                                    </td>
                                    <td>
                                        <button onClick={() => this.edit(item)} >Edit</button>
                                    </td>
                                </tr>
                            </>
                        ))}

                    </tbody>
                </table>
            </>
        );
    }
}

export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            information, //information : information
            inputName: " ",
            inputAge: " ",
            inputAddress: " ",
            inputEditName: '',
            inputEditAge: '',
            inputEditAddress: '',
            idEdit: ''
        };
    }



    inputEditName = (event) => {
        this.setState({ inputEditName: event.target.value })
    }

    inputEditAge = (event) => {
        this.setState({ inputEditAge: event.target.value })
    }

    inputEditAddress = (event) => {
        this.setState({ inputEditAddress: event.target.value })
    }

    myChangeName = (event) => {
        this.setState({ inputName: event.target.value });
    };

    myChangeAge = (event) => {
        this.setState({ inputAge: event.target.value });
    };

    myChangeAddress = (event) => {
        this.setState({ inputAddress: event.target.value });
    };

    submit = () => {
        this.setState({
            information: [
                ...this.state.information,
                {
                    id: this.state.information.length + 1,
                    name: this.state.inputName,
                    age: this.state.inputAge,
                    address: this.state.inputAddress,
                },
            ],
        });
    };

    componentDidUpdate() {
        console.log(this.state.information);
    }

    onDelete = (id) => {
        this.setState({
            information: this.state.information.filter((item) => item.id !== id)
        })
    }


    onEdit = (item) => {
        this.setState({
            inputEditName: item.name,
            inputEditAge: item.age,
            inputEditAddress: item.address,
            idEdit : item.id

        })
    }

    newUpdate = (item) => {
        if(this.state.idEdit === item.id){
          return{
            id : item.id,
            name : this.state.inputEditName,
            age : this.state.inputEditAge,
            address : this.state.inputEditAddress
          }
        }
        return item

    }
    onUpdate = () => {

        // console.log(this.state.information)
        const newInformation = this.state.information.map(this.newUpdate)
        // console.log(information)
        this.setState({
            information: newInformation
        })
    }
    



    render() {
        return (
            <>
                <div>
                    <p>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={this.state.inputName}
                            onChange={this.myChangeName}
                        />
                    </p>

                    <p>
                        <label>Age:</label>
                        <input
                            type="text"
                            value={this.state.inputAge}
                            onChange={this.myChangeAge}
                        />
                    </p>
                    <p>
                        <label>Address:</label>
                        <input
                            type="text"
                            value={this.state.inputAddress}
                            onChange={this.myChangeAddress}
                        />
                    </p>
                </div>
                <button onClick={this.submit}>add</button>

                <ToDoItem information={this.state.information} onDelete={this.onDelete} onEdit={this.onEdit} onUpdate ={this.onUpdate} />

                <Form onEdit={this.Edit} inputEditName={this.inputEditName} inputEditAge={this.inputEditAge} 
                inputEditAddress={this.inputEditAddress} name={this.state.inputEditName} age={this.state.inputEditAge} 
                address={this.state.inputEditAddress} onUpdate={this.onUpdate} />
            </>
        );
    }
}
