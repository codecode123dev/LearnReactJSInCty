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

class ToDoItem extends React.Component {

    delete = (id) =>{
        this.props.onDelete(id)
    }
    render() {
        return (
            <>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    {this.props.information.map((item) => (
                        <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                                <button onClick={() => this.delete(item.id)}>Delete</button>
                                {/* <button >Edit</button> */}
                            </tr>
                        </>
                    ))}
                </table>
            </>
        );
    }
}

export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            information,
            inputName: " ",
            inputAge: " ",
            inputAddress: " ",
        };
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
        console.log(this);
        this.setState({
            information : this.state.information.filter((item)=> item.id !== id)
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

                <ToDoItem information={this.state.information} onDelete ={this.onDelete} />
            </>
        );
    }
}
