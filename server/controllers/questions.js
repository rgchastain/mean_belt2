var mongoose 	= require('mongoose'),
	Question		= require('../models/question')
	User		= require('../models/user')

module.exports = {
	index: (req, res) => {
		Question.find()
			.populate('user')
			.exec((err, questions) =>{
				if (err) {
					return res.json(err.errors);
				}
				console.log({questions:questions})
				return res.json({questions:questions})
			})

		// Note.find({}, (err, notes) => {
		// 	if (err) {
		// 		return res.json(err.errors);
		// 	}
		// 	return res.json(notes);
		// });
		// // return res.json({what: " up "})
	},

	create: (req, res) => {
		// User.findOne({_id: session.user_id}, (err, user) => {
		// 	let question = new Question(req.body);
		// 	question.user = user._id;
		// 	question.save((err) => {
		// 		if (err) {
		// 			return res.json(err.errors);
		// 		}
		// 		user.questions.push(question._id)
		// 		user.save((err) => {
		// 			if (err) {
		// 				return res.json(err.errors);
		// 			}
		// 		return res.json(question);
		// 		})

		// 	});
		// })
		let question = new Question(req.body);

		question.save((err) => {
			if (err) {
				return res.json(err.errors);
			}
			return res.json(question);
		});
	},

	// show: (req, res) => {
	// 	Question.findOne({_id: req.params.id}, (err, question) => {
	// 		if (err) {
	// 			return res.json(err.errors);
	// 		}
	// 		return res.json(question);
	// 	})
	// }

}