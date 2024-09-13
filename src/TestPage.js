import React, { useState } from "react";
import "./styles.css";

const problems = [
  { question: "문제 1: 2 + 2는?", answer: "4" },
  { question: "문제 2: 3 * 3는?", answer: "9" },
  // 추가 문제들
];

const TestPage = ({ name, onFinish }) => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    if (userAnswer === problems[currentProblem].answer) {
      setScore(score + 1);
    }
    setUserAnswer("");
    if (currentProblem < problems.length - 1) {
      setCurrentProblem(currentProblem + 1);
    } else {
      onFinish(score);
    }
  };

  return (
    <div className="container">
      <h2>{name}님의 알고리즘 테스트</h2>
      <p>{problems[currentProblem].question}</p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>제출</button>
    </div>
  );
};

export default TestPage;
