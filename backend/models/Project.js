const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	github: {
		type: String
	},
	description: {
		type: String
	},
	technologies: {
		type: [ String ]
	},
	link: {
		type: String
	},
	milestones: {
		type: [ mongoose.Schema.Types.ObjectId ],
		ref: 'Milestones'
	},
	deadLine: {
		type: Date
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	deletedAt: {
		type: Date
	},
	deleted: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Project', Schema);
