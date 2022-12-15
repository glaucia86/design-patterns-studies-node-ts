import { NotificaoEmail, NotificaoSMS } from "./classes/DifferentNotifications";

new NotificaoEmail().enviar({
  nome: 'Glaucia Lemos',
  email: 'email@email.com',
  telefone: '21 99999-9999'
});

new NotificaoSMS().enviar({
  nome: 'Glaucia Lemos',
  email: 'email@email.com',
  telefone: '21 99999-9999'
});
