"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const messages = [
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
router.get('/', (req, res) => {
    // eslint-disable-next-line object-shorthand
    res.render('index', { title: 'Mini Message Board', messages: messages });
});
router.get('/new', (req, res) => {
    res.render('form');
});
router.post('/new', (req, res) => {
    messages.push({ text: req.body.message1, user: req.body.name1, added: new Date() });
    res.redirect('/');
});
exports.default = router;
