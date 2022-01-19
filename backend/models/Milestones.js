const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	deadLine: {
		type: Date
	},
	tags: {
		type: [ String ]
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
	},
	project: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Project'
	},
	required: true
});

module.exports = mongoose.model('Milestones', Schema);
