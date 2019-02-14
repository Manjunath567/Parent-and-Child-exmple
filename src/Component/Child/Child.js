import React from "react";
//import Child from './Child/Child';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      address:'New jarsey',
    }

    this.sendtoParent= () =>{
          this.props.recivedchild(this.state.address);
    }

  }

  render(){
    console.log("props in child", this.props);
    return (
      <div>
      Child Component
      <p> {this.props.senddata}</p>
      <button onClick={(e) => this.sendtoParent(e)}>Click Me</button>
      </div>
    );
  }
}

export default Child;
