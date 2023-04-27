import React, {useEffect,useState, useRef} from "react";




// BT 
// export function Display() {
//     const [number, setNumber] = useState(0);
//     function Cal() {
//       if (number + 1 < 10) {
//         setNumber(number + 1)
//       }
//       else {
//         alert("Number greater than 10")
//       }
//     }
  
//     return (
//       <>
//         <h1>Number {number} </h1>
//         <button onClick={Cal}> click</button>
//       </>
//     )
//   }
  


export function Focus() {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current.focus()
    };

    return(
        <>
        <input ref={ref} id="message"  ></input>
        <br></br>
        <button onClick={handleClick} >Submit</button>
        </>
    )
}