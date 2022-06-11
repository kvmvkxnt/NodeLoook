import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 3001;
const HOST = 'http://127.0.0.1';
const app = express();

const corsOpts = {
  origin: "*",
  methods: [
    "GET",
    "POST",
  ],
  allowedHeaders: [
    'Content-Type', 'token' 
  ],
}

app.use(express.json(), cors(corsOpts), express.static('public'));

app.get('/test', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'ok'
  });
});

app.listen(PORT, () => console.log(`Listening at ${HOST}:${PORT}`));
