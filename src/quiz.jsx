import React, { Component } from "react";
import { questions } from "./questions";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this._input = React.createRef();
    this.state = {
      questions: [],
      currQuestionNum: this.props.currQuestionNum,
      currentAnswer: "",
      image: this.props.image
    };
  }

  componentDidMount() {
    this.setState({ questions });
    //if (this.props.match.path !== "/result") this._input.current.focus();
    //Outstanding issue with auto foucs, since the question page is ummounted,
    //the ref is set to null - Probably should used same render and conditionally
    //render the input, questions instead of breaking into two render methods;
  }

  handleNext = e => {
    e.preventDefault();

    //copy the questions array
    let questions = [...this.state.questions];

    //update the answer for the specific question
    let foundIndex = questions.findIndex(
      q => questions.indexOf(q) === this.props.currQuestionNum
    );
    // has issue when the input is not updated
    questions[foundIndex].answer = this.state.currentAnswer;

    //update the state
    this.setState({ ...this.state, questions });

    //check if end of question list and route to result page
    if (this.props.currQuestionNum < questions.length - 1) {
      let path = `/question${this.props.currQuestionNum + 1}`;
      return this.props.history.push(path);
    } else {
      return this.props.history.push({
        pathname: "/result",
        state: { detail: this.state.questions }
      });
    }
  };

  handleBack = e => {
    e.preventDefault();

    const questions = [...this.state.questions];

    if (this.props.currQuestionNum >= 1) {
      let path = `/question${this.props.currQuestionNum - 1}`;
      this.props.history.push(path);
    }

    // didnt implement the linking of answer yet
  };

  // Handle the input change and update the state
  handleInputChange = e => {
    const currentAnswer = e.target.value;
    this.setState({ currentAnswer });
  };

  //Display page for questions
  displayQuestion = q => {
    const { userInput } = this.state;

    //get the image
    const logo = require("" + this.props.image);

    //hide back button for first question
    let backButtonDisplay = this.props.currQuestionNum === 0 ? "none" : "";

    return (
      <div key={q.id}>
        <form className="form-container">
          <img className="image" src={logo} alt="#" />
          <div className="input-btn">
            <div className="question">{q.content}</div>
            <input
              className="userInput"
              type="text"
              value={this.props.currentAnswer}
              onChange={e => this.handleInputChange(e)}
              ref={this._input}
            />
            <br />
            <button
              className="back-btn"
              style={{ display: backButtonDisplay }}
              onClick={e => this.handleBack(e)}
            >
              Back
            </button>
            <button className="next-btn" onClick={e => this.handleNext(e)}>
              Next
            </button>
          </div>
        </form>
      </div>
    );
  };

  //Display page for results
  displayResult = () => {
    const logo = require("" + this.props.image);
    return (
      <div className="form-container">
        <form>
          <img className="image" src={logo} alt="#" />
          <div className="result">
            {questions.map(q => (
              <li key={q.id}>
                {q.content} {q.answer}
              </li>
            ))}
          </div>
        </form>
      </div>
    );
  };

  render() {
    const { questions } = this.state;
    let currQuestion = questions.filter(
      q => questions.indexOf(q) === this.props.currQuestionNum
    );

    //check if location is from 'result' then reder input, questions conditionally
    if (this.props.match.path === "/result") {
      return <div className="App">{this.displayResult()}</div>;
    } else {
      return (
        <div className="App">
          {currQuestion.map(q => this.displayQuestion(q))}
        </div>
      );
    }
  }
}

export default Quiz;
