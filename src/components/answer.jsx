import React, { Component } from "react";

class DisplayAnswer extends Component {
  constructor(props) {
    super(props);
    this._input = React.createRef();
  }

  componentDidMount() {
    //auto focus for first question
    this._input.current.focus();
  }

  componentDidUpdate() {
    //auto focus for next questions
    this._input.current.focus();
  }

  render() {
    const { handleAnswer, value, answerClass } = this.props;
    return (
      <input
        className={answerClass}
        onChange={e => handleAnswer(e)}
        value={value}
        ref={this._input}
      />
    );
  }
}

export default DisplayAnswer;
