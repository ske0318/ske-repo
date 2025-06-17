const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// 정적 파일 서빙 설정
app.use(express.static(path.join(__dirname, 'public')));

// 기본 라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다!`);
    console.log(`📱 "안녕~!" 웹페이지에 접속해보세요!`);
});

// 에러 핸들링
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('서버 오류가 발생했습니다!');
});

// 404 처리
app.use((req, res) => {
    res.status(404).send(`
        <h1>페이지를 찾을 수 없습니다 😅</h1>
        <p><a href="/">홈으로 돌아가기</a></p>
    `);
});