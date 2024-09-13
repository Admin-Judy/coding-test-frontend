import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProblemList() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/problems')
      .then(response => setProblems(response.data))
      .catch(error => console.error('Error fetching problems:', error));
  }, []);

  return (
    <div className="problem-list">
      <h2>문제 목록</h2>
      <ul>
        {problems.map(problem => (
          <li key={problem.id} className="problem-item">
            <h3>{problem.title}</h3>
            <p>난이도: {problem.difficulty}</p>
            <p>출처: {problem.source}</p>
            <Link to={`/problem/${problem.id}`} className="view-button">문제 보기</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProblemList;

