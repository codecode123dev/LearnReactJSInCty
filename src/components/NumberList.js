import React, { useEffect, useState } from "react";

import '../css/NumberList.css'

// export function NumberList() {
//     // const numbers = [1,2,3,4,5];
//     const persons = [{
//       id: 0,
//       name: 'Creola Katherine Johnson',
//       profession: 'mathematician',
//       accomplishment: 'spaceflight calculations',
//       imageId: './img/img.jpg'
//     }, {
//       id: 1,
//       name: 'Mario José Molina-Pasquel Henríquez',
//       profession: 'chemist',
//       accomplishment: 'discovery of Arctic ozone hole',
//       imageId: './img/img.jpg'
//     }, {
//       id: 2,
//       name: 'Mohammad Abdus Salam',
//       profession: 'physicist',
//       accomplishment: 'electromagnetism theory',
//       imageId: './img/img.jpg'
//     }];

//     function checkId(people) {
//       return people.id > 0;
//     }

//     const filterPerson = persons.filter(checkId);


//     const listItems = filterPerson.map((person) =>
//       <div key={person.id}>
//         <b style={{color:"red"}}>{person.name}</b>
//         <img alt='test' src={require(`${person.imageId}`)} width='100'  />//Không nên dùng biến ở trong require
//         <p>{person.profession}</p>
//         <p>{person.accomplishment}</p>
//       </div>
//     );
//     return (
//       <div>
//         {listItems}
//       </div>
//     );
//   }

export function NumberList() {
    // const numbers = [1,2,3,4,5];
    const persons = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: require('../img/img.jpg')
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: require('../img/img.jpg')
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: require('../img/img.jpg')
    }];

    function checkId(people) {
        return people.id > 0;
    }
    const filterPerson = persons.filter(checkId);
    const listItems = filterPerson.map((person) =>
        <div key={person.id}>
            <b className="personName" >{person.name}</b>
            <img className="personImg" alt='test' src={person.imageId} />
            <p style={{ color: "red" }}>{person.profession}</p>
            <p className="personAccomplishment">{person.accomplishment}</p>
        </div>
    );
    return (
        <div>
            {listItems}
        </div>
    );
}
