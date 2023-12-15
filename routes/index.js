var express = require('express');
var router = express.Router();

const messages = [
	{
		text: 'hi',
		user: 'grzegorz',
		added: new Date().toLocaleString(),
	},
	{
		text: 'bye',
		user: 'franciszek',
		added: new Date().toLocaleString(),
	},
];

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function (req, res, next) {
	res.render('form', { title: 'New Message' });
});

router.post('/new', function (req, res) {
	messages.push({ text: req.body.text, user: req.body.user, added: new Date().toLocaleString() });
	res.redirect('/');
});

module.exports = router;
