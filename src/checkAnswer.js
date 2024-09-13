const checkAnswer = async () => {
    try {
      const response = await fetch('http://localhost:5000/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: userCode.trim() }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }
  
      const data = await response.json();
      const userResult = data.output.trim();
  
      if (userResult === problem.solution) {
        setResult('정답입니다!');
      } else {
        setResult('다시 시도해보세요.');
      }
    } catch (error) {
      setResult('코드 실행 중 오류가 발생했습니다: ' + error.message);
    }
  };
  