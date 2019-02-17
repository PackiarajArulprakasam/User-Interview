import React, { Component } from "react";
import { questions, getQuestion, saveAnswer } from "./data/questions";
import DisplayQuestion from "./components/questions";
import DisplayAnswer from "./components/answer";
import DisplayImage from "./components/image";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this._input = React.createRef();
  }

  state = {
    imageIndex: 0,
    question: "",
    answer: "",
    questionIndex: 0,
    totalQuestions: 0
  };

  componentDidMount() {
    //set the total number of questions
    const totalQuestions = questions.length;

    //get the first question and answer
    const data = getQuestion(this.state.questionIndex);
    const question = data.content;
    const answer = data.answer;

    this.setState({ ...this.state, question, answer, totalQuestions });
  }

  displaySummary = () => {
    return this.props.history.push({
      pathname: "/summary"
    });
  };

  handleNext = e => {
    e.preventDefault();

    //Save the answer
    saveAnswer(this.state.questionIndex, this.state.answer);

    //Increment the question index to show the next question
    const questionIndex = this.state.questionIndex + 1;

    //Update the state with next question, answer, next Question index , next image index
    if (questionIndex < this.state.totalQuestions) {
      const data = getQuestion(questionIndex);
      const question = data.content;
      const answer = data.answer;
      const imageIndex = this.state.imageIndex + 1;
      this.setState({
        ...this.state,
        question,
        answer,
        questionIndex,
        imageIndex
      });
    }

    //if the user sumbitted the last question then set the showSummary to true
    else this.displaySummary();
  };

  handleBack = e => {
    e.preventDefault();
    const FIRST_INDEX = 0;
    const questionIndex = this.state.questionIndex - 1;
    console.log("back questionIndex", questionIndex);
    if (questionIndex >= FIRST_INDEX) {
      const data = getQuestion(questionIndex);
      const question = data.content;
      const answer = data.answer;
      this.setState({ ...this.state, question, answer, questionIndex });
    }
    console.log("Back button");
  };

  handleAnswer = e => {
    const answer = e.target.value;
    this.setState({ ...this.state, answer });
  };

  render() {
    const { questionIndex } = this.state;
    console.log("question Index", questionIndex);
    return (
      <div className="parent">
        <form className="form-container">
          <DisplayImage imgClass={"image"} imageIndex={this.state.imageIndex} />

          <DisplayQuestion
            questionClass={"question"}
            question={this.state.question}
          />

          <DisplayAnswer
            answerClass={"input"}
            value={this.state.answer}
            handleAnswer={this.handleAnswer}
            ref={this._input}
          />

          <br />

          {questionIndex > 0 && (
            <button className={"back-btn"} onClick={this.handleBack}>
              Back
            </button>
          )}

          <button className={"next-btn"} onClick={this.handleNext}>
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default Quiz;
