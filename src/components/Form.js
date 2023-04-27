import React, { useEffect, useState, event } from "react";

import "../css/Form.css";

export function NameForm(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const val = event.target.value;
    console.log(val);

    if (val === "" || +val ) {
        // console.log('3232');
        setValue(val);
    }

    
  };

  const handleSubmit = () => {
    alert("A name was submitted: " + value);
  };
  const validateInput = (event) => {
    console.log(event);
  };

  return (
    <>
      <label>
        Name: <input value={value} onChange={handleChange} />
      </label>

      {props.children}

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

// export function EssayForm() {

//     const [value,setValue] = useState("");
//     const handleChange = (event) => {
//         setValue(event.target.value)
//     };

//     const handleSubmit = (event) => {
//         alert("Name: " + value);
//         event.preventDefault();
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Essay:
//                 <br></br>
//                 <textarea value={value} onChange={handleChange}></textarea>
//             </label>
//             <br></br>
//             <input type="submit" value="Submit"></input>

//         </form>
//     )
// }

export function Selection() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("Selection:" + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick:
        <select onChange={handleChange} value={value}>
          <option value="Minh">Minh</option>
          <option value="Trung">Trung</option>
          <option value="Huy">Huy</option>
        </select>
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  );
}
