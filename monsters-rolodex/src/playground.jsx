import { Component } from "react";

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      meaningOfLife: this.props
    }
  }

  handleClick = () => {
    this.setState(
      // {meaningOfLife: "41"},
      // () => {console.log(this.state.meaningOfLife);}
      (prevState, prevProps) => {
        return {meaningOfLife: prevState.meaningOfLife + 1}
      },
      () => {console.log(this.state.meaningOfLife);}
    )
  }
  //...
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    return true;
  }
}
