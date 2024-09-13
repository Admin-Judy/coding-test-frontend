const axios = require('axios');
const Problem = require('./models/Problem');

async function fetchBaekjoonProblems() {
  const response = await axios.get('https://solved.ac/api/v3/problem/list');
  return response.data.items.map(item => ({
    id: item.problemId,
    title: item.titleKo,
    description: item.descriptionKo,
    difficulty: item.level,
    source: 'Baekjoon'
  }));
}

async function fetchCodeforcesProblems() {
  const response = await axios.get('https://codeforces.com/api/problemset.problems');
  return response.data.result.problems.map(problem => ({
    id: problem.contestId * 1000 + problem.index,
    title: problem.name,
    description: '문제 설명을 가져오려면 추가 API 호출이 필요합니다.',
    difficulty: problem.rating,
    source: 'Codeforces'
  }));
}

async function updateProblems() {
  const baekjoonProblems = await fetchBaekjoonProblems();
  const codeforcesProblems = await fetchCodeforcesProblems();
  const allProblems = [...baekjoonProblems, ...codeforcesProblems];

  for (let problem of allProblems) {
    await Problem.findOneAndUpdate({ id: problem.id }, problem, { upsert: true });
  }

  console.log('문제 업데이트 완료');
}

updateProblems();
