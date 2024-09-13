import React from 'react';

const TestRules = ({ onContinue }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">시험 규칙</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>제한 시간은 3시간입니다.</li>
        <li>모든 문제는 주어진 시간 내에 해결해야 합니다.</li>
        <li>인터넷 검색은 허용되지 않습니다.</li>
        <li>제출 전 모든 답안을 다시 한 번 확인해주세요.</li>
        <li>시험이 끝나면 결과는 자동으로 제출됩니다.</li>
      </ul>
      <button 
        onClick={onContinue}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        계속하기
      </button>
    </div>
  );
};

export default TestRules;
