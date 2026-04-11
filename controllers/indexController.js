import formatDate from '../utils/formatDate.js';

export const messages = [
  {
    text: 'Rooibos',
    user: 'Marius',
    added: formatDate(new Date()),
  },
  {
    text: 'Earl Grey',
    user: 'George',
    added: formatDate(new Date()),
  },
];

export function getMessages(req, res) {
  res.render('index', { messages: messages });
}
