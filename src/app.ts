import express from 'express';
import userRouter from './routes/users';

const app = express();
const port = 3000;

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});