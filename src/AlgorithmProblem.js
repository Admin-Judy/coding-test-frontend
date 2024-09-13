import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

const AlgorithmProblem = () => {
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');

  const problem = {
    description: "1부터 100까지의 합을 구하세요.",
    solution: "5050"
  };

  const checkAnswer = () => {
    try {
      // 사용자가 입력한 코드를 실행하여 결과를 확인
      const userResult = eval(userCode.trim());
      if (userResult === 5050) {
        setResult('정답입니다!');
      } else {
        setResult('다시 시도해보세요.');
      }
    } catch (error) {
      setResult('코드 실행 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="algorithm-problem">
      <h2 className="text-xl font-semibold mb-2">문제: {problem.description}</h2>
      <CodeEditor userCode={userCode} setUserCode={setUserCode} />
      <button
        onClick={checkAnswer}
        className="check-button w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
      >
        답 확인
      </button>
      <p className={`mt-4 ${result === '정답입니다!' ? 'text-green-500' : 'text-red-500'}`}>
        {result}
      </p>
    </div>
  );
};

export default AlgorithmProblem;
