import React, { useState } from 'react';

const TestScreen = ({ problems, onComplete }) => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState('');

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
    } else {
      onComplete();
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">문제 {currentProblem + 1}</h2>
        <p className="mb-4 text-gray-700">{problems[currentProblem].description}</p>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <pre><code>{problems[currentProblem].htmlPreview}</code></pre>
        </div>
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
          rows="4"
          placeholder="여기에 코드를 입력하세요"
        />
        <div className="flex justify-between">
          <button 
            onClick={checkAnswer}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-200 shadow-md"
          >
            답 확인
          </button>
          {result === '정답입니다!' && (
            <button 
              onClick={nextProblem}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 shadow-md"
            >
              {currentProblem === problems.length - 1 ? '제출하기' : '다음 문제'}
            </button>
          )}
        </div>
        {result && (
          <p className={`mt-4 ${result === '정답입니다!' ? 'text-green-500' : 'text-red-500'}`}>
            {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default TestScreen;
