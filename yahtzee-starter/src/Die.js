import React, { Component } from "react";
import "./Die.css";


class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props){
    super(props);
    this.toggleLocked = this.toggleLocked.bind(this);
  }

  toggleLocked(){
    this.props.handleClick(this.props.idx);
  }

  render() {
    const {numberWords, locked, val, disabled, rolling} = this.props;
    let icon_class = `fas fa-dice-${numberWords[val - 1]} fa-5x`
    if(locked) icon_class += ' Die-locked'
    if(rolling) icon_class += ' Die-rolling'
    return (
      <i className={`Die ${icon_class}`}
      onClick={this.toggleLocked}
      disabled={disabled}
      />
    );
  }
}

export default Die;
