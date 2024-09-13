// components/AdminDashboard.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [problems, setProblems] = useState('');

  const createProblemSet = async () => {
    try {
      const docRef = await addDoc(collection(db, "problemSets"), {
        title,
        problems: problems.split(',').map(problem => problem.trim())
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Create Problem Set</h3>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Problems (comma separated)" value={problems} onChange={(e) => setProblems(e.target.value)} />
        <button onClick={createProblemSet}>Create</button>
      </div>
    </div>
  );
}

export default AdminDashboard;

