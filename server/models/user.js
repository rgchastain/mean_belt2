var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
		name: {
			type: String,
			required: [true, "Name cannot be blank."],
			minlength: [2, "Name must be at least 2 characters"]
		},
		questions: [{
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'Question'
		}]
	}, {timestamps: true})

var User = mongoose.model('User', UserSchema);

module.exports = User;