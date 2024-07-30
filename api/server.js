import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

// JSON 본문을 파싱하기 위한 미들웨어 설정
app.use(express.json());

const API_KEY = process.env.REACT_APP_API_KEY; // 실제 API 키를 입력하세요.

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'ko-KR',
  },
});

app.post('/api/server', async (req, res) => {
  try {
    console.log('Request Body:', req.body); // 요청 본문을 로그로 출력

    const { url } = req.body; // 클라이언트가 보낸 URL을 가져옵니다.
    
    // axios를 사용하여 외부 API 요청
    const response = await instance.get(url); // `url`은 요청 URL의 경로를 포함해야 합니다.
    
    // API 응답 데이터를 클라이언트에 반환
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error during API call:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
