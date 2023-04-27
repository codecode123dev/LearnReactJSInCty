import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ParentComponent1 from './parentComponent';
import TodoPage from './pages/TodoPage';
import imgTest from './img/img.jpg';


// function formatDate(date) {
//   return date.toLocaleTimeString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <UserInfo user={props.author}/>        

//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// function UserInfo(props){
//   return (
//     <div className='UserInfo'>
//       <Avatar user={props.user}/>
//       <div className='UserInfo-name'>
//         {props.user.name}
//       </div>
//     </div>
//   )
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }


// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const Element = () => <Welcome name="Sara" />;
// const element = < Welcome name="Sara"/>


// function Clock(props) {
//   return (
//     <>
//     <h1>Hi</h1>
//     <p> It is {props.date.toLocaleTimeString()}</p>
//     </>
//   )
// }

// class Clock extends React.Component {

//   state = {note:"test"}


//   render() {
//     return (
//       <div>
//         <h1 onClick={() => this.setState({note: 'fjfjfjf'})}>Hello, world!</h1>
//         <h2>It is {this.state.note}.</h2>
//       </div>
//     );
//   }
// }

// function App() {
//   const [comment, setComment] = useState({
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'https://placekitten.com/g/64/64',
//     },
//   })

//   useEffect(() =>{
//     setInterval(() => {
//       setComment({
//         ...comment,
//         date: new Date()
//       })
//     }, 1000)
//   }, [])

//   // console.log(comment.date);

//   return (
//     <>
//     <Comment
//     date={comment.date}
//     author={comment.author}
//     text={comment.text}
//     />
//     <Clock/>

//     </>
//   );
// }


// function App() {
//   return (
//     <div className='App'>
//       <ParentComponent1/>
//     </div>
//   )
// }

// function App() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('You Clicked submit');
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <button type='submit'> submit</button>
//     </form>
//   )
// }

// Xử lý Event

// export function App() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("You are click submit");
//   }
//   return(
//     <form onSubmit={handleSubmit}>
//       <button type="submit">
//       click
//       </button>
//     </form>

//   );
// } 

//Rendering có điều kiện(write function)

// export function App() {

//   const [isToggleOn, setIsToggleOn] = React.useState(true);

//   const handleClick = React.useCallback(() => {

//     setIsToggleOn(prevIsToggleOn => !prevIsToggleOn);

//   }, []);
//   return (
//     <button onClick={handleClick}>
//       {isToggleOn ? 'ON' : 'OFF'}
//     </button>
//   );
// }
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// export function LoginControl() {
//   const [isLoggedIn , setIsLoggedIn] = React.useState(false);
//   const handleLoginClick = () => {
//     console.log(1);
//     setIsLoggedIn(true);
//   };

//   const handleLogoutClick = React.useCallback(() => {
//     setIsLoggedIn(false);
//   },[])

//   return (
//     <div>
//       <Greeting isLoggedIn={isLoggedIn}/>
//       {isLoggedIn ? <LogoutButton onClick={handleLogoutClick}/> : <LoginButton onClick={handleLoginClick}/>}
//     </div>
//   )
// }

// BT 
function Display() {
  const [number, setNumber] = useState(0);
  function Cal() {
    if (number + 1 < 10) {
      setNumber(number + 1)
    }
    else {
      alert("Number greater than 10")
    }
  }

  return (
    <>
      <h1>Number {number} </h1>
      <button onClick={Cal}> click</button>
    </>
  )
}


// List and key

// function ListItem(props) {
//   return(
//   )
// }

// export function NumberList() {
//   // const numbers = [1,2,3,4,5];
//   const persons = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//     accomplishment: 'spaceflight calculations',
//     imageId: './img/img.jpg'
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//     accomplishment: 'discovery of Arctic ozone hole',
//     imageId: './img/img.jpg'
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//     accomplishment: 'electromagnetism theory',
//     imageId: './img/img.jpg'
//   }];

//   function checkId(people) {
//     return people.id > 0;
//   }

//   const filterPerson = persons.filter(checkId);


//   const listItems = filterPerson.map((person) =>
//     <div key={person.id}>
//       <b style={{color:"red"}}>{person.name}</b>
//       <img alt='test' src={require(`${person.imageId}`)} width='100'  />
//       <p>{person.profession}</p>
//       <p>{person.accomplishment}</p>
//     </div>
//   );
//   return (
//     <div>
//       {listItems}
//     </div>
//   );
// }









// export function Counting() {
//   return (
//     <Display />
//   )
// }






// export function App() {
//   return (
//     console.log("hello")
//   );
// }
