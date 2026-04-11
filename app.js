import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import newMessageRouter from './routes/newMessageRouter.js';
import indexRouter from './routes/indexRouter.js';

// Directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('The server is running on PORT: ' + PORT);
});
