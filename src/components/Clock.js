import React, { useEffect, useState } from "react";


export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.tick();
                console.log('Hàm này đang chạy');
            },
            1000
        );
    }

    componentWillUnmount() {
        console.log('unmount');
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}