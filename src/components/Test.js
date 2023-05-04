import React from 'react';
import { useState } from 'react';


export class TestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            name: "",
            age: "",
            action: "ADD ITEM",//default ADD ITEM
            items: [
                {
                    name: "minh", age: '18'
                }
            ]
        }
        // this.changeName = this.changeName.bind(this);
        // this.changeAge= this.changeAge.bind(this);

    }
    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    changeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    addItem = () => {
        if (!this.state.items.find(item => item.name === this.state.name)) {
            this.setState({
                items: [
                    ...this.state.items,
                    { name: this.state.name, age: this.state.age }
                ],
                name: "",
                age: ""
            })
        }
    }
    Edit = (item, index) => {
        this.setState({
            action: 'UPDATE ITEM',
            name: item.name,
            age: item.age,
            index: index
        });
    }
    updateItem = () => {
        let data = this.state.items;
        data.map((item, index) => {
            if (this.state.index === index) {
                item.name = this.state.name;
                item.age = (this.state.age);
            }
        })
        //set update items
        this.setState({
            items: data,
            name: "",
            age: "",
            action: 'ADD_ITEM'
        })

    }

    deleteItem = (name) => this.setState({
        items: this.state.items.filter(item => item.name != name)
    })
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>{this.state.action}</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="" className="form-control" onChange={this.changeName} value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" name="" className="form-control" onChange={this.changeAge} value={this.state.age} />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={this.state.action == 'ADD ITEM' ? this.addItem : this.updateItem}>Add</button>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <h1>List Products</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Modify</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.items.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.age} </td>
                                            <td><button className="badge badge-warning" onClick={() => this.Edit(item, index)}>modify</button></td>
                                            <td><button className="badge badge-danger" onClick={() => this.deleteItem(item.name)}>remove</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

