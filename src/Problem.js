import React from 'react';

const Problem = ({ description, htmlPreview }) => {
  return (
    <div className="problem">
      <h2>문제</h2>
      <p>{description}</p>
      <div className="html-preview">
        <h3>HTML 미리보기</h3>
        <div dangerouslySetInnerHTML={{ __html: htmlPreview }} />
      </div>
    </div>
  );
};

export default Problem;
