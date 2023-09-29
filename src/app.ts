import path from 'path';

import express from 'express';

import userRouter from './routes/users';
import indexRouter from './routes/index';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));
app.use(express.urlencoded({extended: false}));


app.use('/users', userRouter);
app.use('/index', indexRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
