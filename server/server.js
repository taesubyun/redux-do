const express = require('express');
const app = express();
const PORT = process.env.PORT || '4000';

app.listen(PORT, () => {
  console.log(`서버가 실행됩니다 : http://localhost:${PORT} /`);
});

app.get('/', (req, res) => {
  res.send('이곳은 Node Express 서버 구동 완료');
});
app.get('/test', (req, res) => {
  res.send('이곳은 테스트 화면');
});
