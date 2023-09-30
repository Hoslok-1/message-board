import {Router, Request, Response} from 'express';

const router = Router();

interface MessageProperties{
  text: string;
  user: string;
  added: Date;
}

// Initial set of messages to be displayed as soon as user comes to the site.
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
  res.render('index', {title: 'Mini Message Board', messagesArr: messages});
});

router.get('/new', (req: Request, res: Response) => {
  res.render('form');
});

router.post('/new', (req: Request, res: Response) => {
  messages.push({text: req.body.message1, user: req.body.name1, added: new Date()});
  res.redirect('/');
});

export default router;

