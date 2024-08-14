import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	owner: {
		type: ObjectId,
		required: true
	},
	dueDate: {
		type: Date,
		required: true
	},
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;
