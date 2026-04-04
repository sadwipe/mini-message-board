import express from 'express';
import newMessageRouter from './routes/newMessageRouter.js';
import indexRouter from './routes/indexRouter.js';

const app = express();
const PORT = 3000;

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('The server is running on PORT: ' + PORT);
});
