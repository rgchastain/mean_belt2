var mongoose = require('mongoose');

var TriviaSchema = new mongoose.Schema({
		a1: {
			type: String,
			required: true,
		},
		a2: {
			type: String,
			required: true,
		},
		a3: {
			type: String,
			required: true,
		},

		user: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}],
		question: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Question'
		}]

	}, {timestamps: true});

var Trivia = mongoose.model('Trivia', TriviaSchema);

module.exports = Trivia;