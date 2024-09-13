import React from 'react';
import Editor from "@monaco-editor/react";

const CodeEditor = ({ userCode, setUserCode }) => {
  const handleEditorChange = (value) => {
    setUserCode(value);
  };

  return (
    <div className="code-editor">
      <h2>코드 작성</h2>
      <Editor
        height="300px"
        defaultLanguage="css"
        defaultValue={userCode}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
