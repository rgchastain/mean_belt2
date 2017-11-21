var mongoose 	= require('mongoose'),
	Question	= require('../models/question')
	User		= require('../models/user')
	Trivia		= require('../models/trivia')

module.exports = {
	index: (req, res) => {
		Trivia.find()
			.populate('user')
			.exec((err, trivias) =>{
				if (err) {
					return res.json(err.errors);
				}
				console.log({trivias:trivias})
				return res.json({trivias:trivias})
			})
	},

	create: (req, res) => {
		User.findOne({_id: session.user_id}, (err, user) => {
			let trivia = new Trivia(req.body);
			trivia.user = user._id;
			trivia.save((err) => {
				if (err) {
					return res.json(err.errors);
				}
				user.trivias.push(trivia._id)
				user.save((err) => {
					if (err) {
						return res.json(err.errors);
					}
				return res.json(trivia);
				})

			})
		})
	}

}