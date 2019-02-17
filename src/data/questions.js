//List of questions
export const questions = [
  { id: 0, content: "What is your name?", answer: "" },
  { id: 1, content: "What is your age?", answer: "" },
  { id: 2, content: "Are you married?", answer: "" },
  { id: 3, content: "What is your profession?", answer: "" }
];

//Save the answer in the provided index
export const saveAnswer = (questionIndex, answer) => {
  const question = questions.filter(
    q => questions.indexOf(q) === questionIndex
  );
  question[0].answer = answer;
};

//Return the question and answer for the provided questionIndex
export const getQuestion = questionIndex => {
  const data = questions.filter(q => questions.indexOf(q) === questionIndex);
  return data[0];
};
