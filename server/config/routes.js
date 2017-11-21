var questions 	= require('../controllers/questions')
	users		= require('../controllers/users')
	trivias 	= require('../controllers/trivias')
	path		= require('path')
	sessions 	= require('../controllers/sessions')

module.exports = (app) => {
	app.post('/users', users.create);

	app.get('/sessions', sessions.find);
	app.delete('/sessions', sessions.delete);

	app.get('/questions', questions.index);
	app.post('/questions', questions.create);

	app.get('/trivias', trivias.index)
	app.post('/trivias', trivias.create)
	

	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}