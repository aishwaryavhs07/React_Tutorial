import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';


// const app = props => {
//   const [ personsState, setPersonState ] = useState({
//     persons: [
//             {name:'hello', age:24},
//             {name:'xy', age:56}
//           ],

//     otherState: ' some value'

//   });

//     switchNameHandler = (newName) => {
//     // console.log('was clicked');

//     // this.state.persons[0].name='hello'; - don't do this

//     this.setState({
//       persons: [
//         {name:'AISH', age:40},
//         {name:'xy', age:56}
//       ]
//     })
//   }



class App extends Component {

  state={

    persons: [
      {name:'AISH', age:24},
      {name:'xy', age:56}
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked');

    // this.state.persons[0].name='hello'; - don't do this

    this.setState({
      persons: [
        {name:'AISH', age:40},
        {name:'xy', age:56}
      ]
    })
  }
    nameChangedHandler =(event) => {
    this.setState({
      persons: [
        {name:'AnisH', age:405},
        {name: event.target.value, age:60},
        {name:'hello', age:564}
      ]



    })
  }
  render() {

     return (
       <div className="App">
       <h1>this is react app</h1>
       <button onClick= {() => this.switchNameHandler('aishwaryaa vij!')} >switch name</button>
       <Person 
       name={this.state.persons[0].name}
        age={this.state.persons[0].age}/>
       <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click= {this.switchNameHandler.bind(this, 'hema')}
        changed= {this.nameChangedHandler}>hobbies: movies</Person>
        
   
       </div>
     );
    
  }
}


export default App;
