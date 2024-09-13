import React, { useState } from 'react';

const StartScreen = ({ onStart }) => {
  const [userName, setUserName] = useState('');

  const handleStart = () => {
    if (userName.trim()) {
      onStart(userName);
    }
  };

  return (
    <div className="start-screen">
      <h1 className="text-2xl font-bold mb-4">환영합니다!</h1>
      <p className="mb-4">시험을 시작하려면 이름을 입력하세요</p>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        placeholder="이름 입력"
      />
      <button
        onClick={handleStart}
        className="start-button w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
      >
        시작하기
      </button>
    </div>
  );
};

export default StartScreen;

