import React from "react";
import "./styles.css";

const ResultPage = ({ name, score, problems }) => {
  return (
    <div className="container">
      <h1>테스트 완료!</h1>
      <p>{name}님의 점수: {score} / {problems.length}</p>
    </div>
  );
};

export default ResultPage;
