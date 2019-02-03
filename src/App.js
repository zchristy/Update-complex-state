import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    
    setTimeout(() => {
      // creating random instructor
      const randInst = 
      Math.floor(Math.random() * this.state.instructors.length);
      
      // creating random hobby
      const randHobby = 
      Math.floor(Math.random() * this.state.instructors[randInst].length);
      
      // creating shallow copy of instructor array
      // const instructors = this.state.instructors.slice();
      // Assigning a new object for random instructor 
      // instructors[randInst] = Object.assign({}, instructors[randInst]);
      // creating shallow copy of hobbies array
      // instructors[randInst].hobbies = instructors[randInst].hobbies.slice();
      // Deletes the randHobby
      // [randInst].hobbies.splice(randHobby, 1);
      // this is using the new instructors variable we created in this function
      // this.setState({instructors});
      
      // less complicated way of doing what is commented out above ^^^^^^
      const instructors = this.state.instructors.map((inst, i) => {
        
        if (i === randInst) {
          const hobbies = inst.hobbies.slice();
          hobbies.splice(randHobby, 1);
          return {
                  ...inst,
                  hobbies
                  }
        }
        return inst;
      });
      
      this.setState({instructors});
      
    }, 1000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
