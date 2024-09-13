import React, { useState } from "react";
import "./styles.css";

const WelcomePage = ({ onStart }) => {
  const [name, setName] = useState("");

  const handleStart = () => {
    if (name) {
      onStart(name);
    } else {
      alert("이름을 입력하세요!");
    }
  };

  return (
    <div className="container">
      <h1>알고리즘 테스트에 오신 것을 환영합니다!</h1>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleStart}>시작하기</button>
    </div>
  );
};

export default WelcomePage;
