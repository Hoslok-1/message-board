import {Router, Request, Response} from 'express';

const router = Router();

interface MessageProperties{
  text: string;
  user: string;
  added: Date;
}

const messages: MessageProperties[] = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', (req: Request, res: Response) => {
  // eslint-disable-next-line object-shorthand
  res.render('index', {title: 'Mini Message Board', messages: messages});
});

export default router;

