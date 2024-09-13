import React from 'react';

const NameInput = ({ name, setName, onStart }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">이름을 입력해주세요</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="이름"
      />
      <button 
        onClick={onStart}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        시작하기
      </button>
    </div>
  );
};

export default NameInput;
