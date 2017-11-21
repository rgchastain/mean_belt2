var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
		quest: {	
			type: String,
			required: [true, 'Question is required'],
			minlength: [15, 'minumum length is 15 characters']
		},
		correct: {
			type: String,
			required: [true],
			minlength: [1]
		},
		wrong1: {
			type: String,
			required: [true],
			minlength: [1]
		},
		wrong2: {
			type: String,
			required: [true],
			minlength: [1]
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	}, {timestamps: true});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;