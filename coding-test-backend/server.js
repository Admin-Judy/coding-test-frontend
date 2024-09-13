const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const problemSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  difficulty: String,
  source: String
});

const Problem = mongoose.model('Problem', problemSchema);

app.get('/api/problems', async (req, res) => {
  const problems = await Problem.find();
  res.json(problems);
});

app.post('/api/submit', (req, res) => {
  // 여기에 코드 제출 및 채점 로직을 구현합니다.
  res.json({ message: '제출 완료' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
