import React from 'react';

const Problem = ({ description }) => {
  return (
    <div className="problem">
      <h2 className="text-xl font-semibold mb-2">문제 설명</h2>
      <p>{description}</p>
    </div>
  );
};

export default Problem;
