import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 정적 업로드 폴더 제공 (이미지 접근 가능하도록 설정)
app.use('/uploads', express.static(path.join(__dirname, './uploads')));
app.use(cors()); // cors 허용
// app.use(express.static(path.join(__dirname, '../frontend'))); //정적으로 사용할때 사용 배포전
app.use(express.json()); // json 파싱

// Multer 설정 (이미지 저장 경로 설정)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, './uploads');  // ../frontend/uploads frontend 제거
    if(!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true});
    }
    cb(null, uploadPath);
  },
  filename: (req,file,cb) => {
    cb(null, 'business_card.png');
  }
});

const upload = multer({ storage });

// 이미지 업로드 API
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: '이미지 업로드 실패' });
  }
  const imageUrl = `https://nexcard-b.onrender.com/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

// 환경 변수 전달 API
app.get('/api/env', (req, res) => {
  res.json({
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    KAKAO_APP_KEY: process.env.KAKAO_APP_KEY
  });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
