import formatDate from '../utils/formatDate.js';

export const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: formatDate(new Date()),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: formatDate(new Date()),
  },
];

export function getMessages(req, res) {
  res.render('index', { messages: messages });
}
