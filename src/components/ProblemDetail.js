import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProblemDetail() {
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/problems/${id}`)
      .then(response => setProblem(response.data))
      .catch(error => console.error('Error fetching problem:', error));
  }, [id]);

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/submit', { problemId: id, code })
      .then(response => alert(response.data.message))
      .catch(error => console.error('Error submitting code:', error));
  };

  if (!problem) return <div>Loading...</div>;

  return (
    <div className="problem-detail">
      <h2>{problem.title}</h2>
      <p>{problem.description}</p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="여기에 코드를 작성하세요"
      />
      <button onClick={handleSubmit}>제출</button>
    </div>
  );
}

export default ProblemDetail;
