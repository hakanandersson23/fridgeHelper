import React, { Component } from 'react';
import './textArea.css';

export default class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: (props.locked && props.active) || false,
      error: props.error || "",
      label: props.label || "Label"
    };
  }

  changeValue(event) {
    const { onChange } = this.props;
    const value = event.target.value;
    this.setState({ error: "" });
    if (onChange) {
      onChange(value);
    }
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      const { predicted, onChange } = this.props;
      if (predicted && onChange) {
        onChange(predicted);
      }
    }
  }

  render() {
    const { active, error, label } = this.state;
    const { predicted, locked, value } = this.props;
    const fieldClassName = `myClass ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return (
      <div className={fieldClassName}>
        {active &&
          value &&
          predicted &&
          predicted.includes(value) && <p className="predicted">{predicted}</p>}
        <textarea
          id={1}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.changeValue.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
        />
        {!active && <label htmlFor={1} className={error && "error"}>{label}</label>}
      </div>
    );
  }
}
