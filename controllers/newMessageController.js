import formatDate from '../utils/formatDate.js';
import { messages } from './indexController.js';

export function getNewMessageForm(req, res) {
  res.render('form');
}

export function createNewMessage(req, res) {
  const newMessage = {
    text: req.body.messageText,
    user: req.body.messageUser,
    added: formatDate(new Date()),
  };

  messages.push(newMessage);

  res.redirect('/');
}
