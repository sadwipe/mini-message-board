import { Router } from 'express';

import {
  getNewMessageForm,
  createNewMessage,
} from '../controllers/newMessageController.js';

const newMessageRouter = Router();

newMessageRouter.get('/', getNewMessageForm);

newMessageRouter.post('/', createNewMessage);

export default newMessageRouter;
