const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ideaSchema = new Schema({
	id: {
		type: String
	},
	date: {
		type: Date
	},
	body: {
		type: String
	},
	categories: {
		type: String
	}
})