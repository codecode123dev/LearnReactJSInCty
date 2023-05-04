import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {  Greeting,Counting } from './App';

import { NumberList } from './components/NumberList';

import Test  from './components';

import {NameForm, EssayForm,Selection} from './components/Form';

import {Focus} from './components/Exercise';
import{ToDoList} from './components/TodoList';

import {TestApp} from './components/Test';

import {Product} from './components/TestCRUD'
const root = ReactDOM.createRoot(document.getElementById('root'));
// import { Clock } from './components/Clock';

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   root.render(
//   <Clock date={new Date()} />
  
//   );
// }

// setInterval(tick, 1000);

// use class

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
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
        <button onClick={this.componentWillUnmount()}>click</button>
      </div>
    );
  }
}
class UnClock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hide : false
    };
  }

  hideComponent = () =>{
    this.setState({
      hide : true
    })
  }
  

  changeComponent = () =>{

    if(!this.state.hide){
      return <Clock/>
    }
    return null
  }

  render(){
    return(
      <div>
        {this.changeComponent()}
        <button onClick={this.hideComponent}>Hide Clock</button>
      </div>
    )
  }
}

// const App1 = () =>{
//   const [isRenderClock, setIsRenderClock] = useState(true)

//   const renderClock = () =>{
//     if(isRenderClock){
//       return <Clock />
//     }
//     else return null
//   }

//   return(
//     <>
//       {renderClock()}
//       <p onClick={() => setIsRenderClock(false)}>Hide Clock</p>
//     </>
//   )
// }


root.render(
  // <App1 />
  // <App/>
  // <App isLoggedIn={true}/>
  // <Greeting isLoggedIn={true} />
  /* <Counting/> */
  // <>
  // <Test />
  // {/* <Form/> */}
  // </>

  // <NameForm>
  //   <p>Test</p>
  //   <p>vsfjvjsbvsjdbvdjsb</p>
  // </NameForm>
  // <Focus/>
  // <NameForm/>
  <ToDoList/>
  // <TestApp/>

  // <Product/>
  


);
// root.render(
//   <App/>
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
