import React, { useState, useEffect } from 'react';
import Problem from './Problem';
import CodeEditor from './CodeEditor';
import Result from './Result';
import './styles.css';

const App = () => {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');
  const [currentProblem, setCurrentProblem] = useState(0);

  const problems = [
    {
      description: "CSS 선택자를 사용하여 모든 <li> 요소를 선택하세요.",
      solution: "li",
      htmlPreview: `
        <ul>
          <li>항목 1</li>
          <li>항목 2</li>
          <li>항목 3</li>
        </ul>
      `
    },
    {
      description: "클래스가 'highlight'인 모든 요소를 선택하세요.",
      solution: ".highlight",
      htmlPreview: `
        <div class="highlight">강조 1</div>
        <p>일반 텍스트</p>
        <span class="highlight">강조 2</span>
      `
    }
  ];

  useEffect(() => {
    checkAnswer();
  }, [userCode]);

  const checkAnswer = () => {
    if (userCode.trim() === problems[currentProblem].solution) {
      setResult('정답입니다!');
    } else {
      setResult('다시 시도해보세요.');
    }
  };

  const nextProblem = () => {
    if (currentProblem < problems.length - 1) {
      setCurrentProblem(currentProblem + 1);
      setUserCode('');
      setResult('');
    }
  };

  return (
    <div className="app">
      <div className="problem-section">
        <Problem 
          description={problems[currentProblem].description} 
          htmlPreview={problems[currentProblem].htmlPreview}
        />
      </div>
      <div className="editor-section">
        <CodeEditor userCode={userCode} setUserCode={setUserCode} />
        <Result result={result} />
        {result === '정답입니다!' && (
          <button onClick={nextProblem}>다음 문제</button>
        )}
      </div>
    </div>
  );
};

export default App;
