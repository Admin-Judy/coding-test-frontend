import React from 'react';

const CompletedScreen = ({ userName, startTime }) => {
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000 / 60).toFixed(2);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl transform hover:scale-105 transition-all duration-300">
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4 text-indigo-600">시험이 완료되었습니다!</h2>
        <p className="mb-2 text-gray-700">이름: {userName}</p>
        <p className="mb-2 text-gray-700">소요 시간: {duration}분</p>
        <p className="mt-4 text-gray-600">결과가 eddie@jeju.consulting으로 전송되었습니다.</p>
      </div>
    </div>
  );
};

export default CompletedScreen;
