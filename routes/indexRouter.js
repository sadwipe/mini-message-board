import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.send('You\'ve requested the "/" page');
});

export default indexRouter;
