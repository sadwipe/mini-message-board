import { Router } from 'express';

const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
  res.send('You\'ve requested the "/new" page ');
});

export default newMessageRouter;
