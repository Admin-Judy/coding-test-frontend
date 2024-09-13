// components/StudentDashboard.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

function StudentDashboard({ userId }) {
  const [problemSetId, setProblemSetId] = useState('');
  const [score, setScore] = useState(0);

  const submitScore = async () => {
    try {
      const docRef = await addDoc(collection(db, "users", userId, "scores"), {
        problemSetId,
        score
      });
      console.log("Score submitted with ID: ", docRef.id);
    } catch (e) {
      console.error("Error submitting score: ", e);
    }
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <div>
        <h3>Submit Score</h3>
        <input type="text" placeholder="Problem Set ID" value={problemSetId} onChange={(e) => setProblemSetId(e.target.value)} />
        <input type="number" placeholder="Score" value={score} onChange={(e) => setScore(Number(e.target.value))} />
        <button onClick={submitScore}>Submit</button>
      </div>
    </div>
  );
}

export default StudentDashboard;
