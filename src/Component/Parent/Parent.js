import React from "react";
import Child from '../Child/Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name:'Manjunath',
      mail:'manju@gmail.com'
    }
    this.recivedata=(val)=>{
      console.log("data", val)
    }

  }

  render(){
    return (
      <div>
      <p> {this.state.name}</p>
      <Child senddata={this.state.mail} recivedchild={this.recivedata}/>
      </div>
    );
  }
}

export default Parent;
