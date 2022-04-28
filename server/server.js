const express = require('expres');
const app = express();
const PORT = process.env.PORT || '4000';

app.listen(PORT, () => {
  console.log(`서버가 실행됩니다 : http://localhost:${PORT} /`);
});

app.get('/', (req, res) => {
  res.spend('Node Express 서버 구동 완료');
});
