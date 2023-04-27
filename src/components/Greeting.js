import React,{useEffect,useState} from "react";
import imgTest from "../img/img.jpg"

/////////////////Display content//////////////////

function UserGreeting() {
    const [imgName, setImgName] = useState('img.jpg')
    const img = require(`./img/${imgName}`)
    return (
      <>
  
        <h1 onClick={() => setImgName('test.png')}>Welcome</h1>
  
        <img src={img} alt="test" />
  
        <img src={require('./img/img.jpg')} alt='test' />
  
        <img src={imgTest} alt="test" />
  
      </>
    )
  }
  
  function GuestGreeting() {
    return (
      <h1>Please Login</h1>
    )
  }
  
  export function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
  
    if (isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
  }
  