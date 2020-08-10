import React from 'react';

//ES6 
const person = (props) => {

     return (
     <div>
     <p onClick={props.click}> I'm {props.name} age-{props.age} years {props.children}</p>
     <p>{props.children}</p>
     <input type="text" onChange={props.changed} value={props.name}/>
     </div>
     )
};

export default person;