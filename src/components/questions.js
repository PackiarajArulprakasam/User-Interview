import React from "react";

const DisplaQuestion = ({ question, questionClass }) => {
  return <p className={questionClass}> {question} </p>;
};

export default DisplaQuestion;
