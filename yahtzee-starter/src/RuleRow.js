import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score, name, doScore, desc } = this.props;
    // if there is no score the rule row must be active
    let active = score === undefined
    let styles = active
                ? "RuleRow RuleRow-active"
                : "RuleRow RuleRow-disabled";
    return (
      <tr className={styles} onClick={active && doScore}>
        <td className="RuleRow-name">{name}</td>
        {/* Show description if row is active, else show the score */}
        <td className="RuleRow-score">{active ? desc : score }</td>
      </tr>
    )
  }
}

export default RuleRow;