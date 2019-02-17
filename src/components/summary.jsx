import React, { Component } from "react";
import { questions } from "../data/questions";

class Summary extends Component {
  render() {
    // Render the summary of the question and answers
    return (
      <div className="form-container summary-container">
        <h3>Summary</h3>
        {questions.map(q => (
          <li className="summary" key={q.id}>
            {q.content} <b>{q.answer}</b>
          </li>
        ))}
      </div>
    );
  }
}

export default Summary;
