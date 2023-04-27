import React,{useEffect,useState} from "react";



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

// Rendering có điều kiện(write function)

export function App() {

  const [isToggleOn, setIsToggleOn] = React.useState(true);

  const handleClick = React.useCallback(() => {

    setIsToggleOn(prevIsToggleOn => !prevIsToggleOn);

  }, []);
  return (
    <button onClick={handleClick}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export function LoginControl() {
  const [isLoggedIn , setIsLoggedIn] = React.useState(false);
  const handleLoginClick = () => {
    console.log(1);
    setIsLoggedIn(true);
  };

  const handleLogoutClick = React.useCallback(() => {
    setIsLoggedIn(false);
  },[])

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {isLoggedIn ? <LogoutButton onClick={handleLogoutClick}/> : <LoginButton onClick={handleLoginClick}/>}
    </div>
  )
}
