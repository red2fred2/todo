import bcrypt from 'bcrypt';
import express from 'express';
import mongoose from 'mongoose';
import Task from './model/Task.js';
import User from './model/User.js';

await mongoose.connect('mongodb://127.0.0.1/todo');

const port = 3050;
const taskapi = express();

taskapi.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

// Get all tasks from a single user
taskapi.get('/userTasks/:userID', async (req, res) => {
	let userID = req.params.userID;

	// Handle the user not existing
	let exists = await User.findById(userID).exec();
	if(exists === null) {
		return res.status(404)
				  .json({error: "User does not exist"});
	}

	// Otherwise, return the tasks
	let result = await Task.find({owner: userID}).exec();

	res.json(result);
});

// Get a single task
taskapi.get('/task/:taskID', async (req, res) => {
	let taskID = req.params.taskID;

	// Handle the task not existing
	let exists = await Task.findById(taskID).exec();
	if(exists === null) {
		return res.status(404)
				  .json({error: "Task does not exist"});
	}

	// Otherwise, return the tasks
	let result = await Task.findById(taskID).exec();

	res.json(result);
});

// Create a new task
taskapi.post('/createTask', async (req, res) => {
	// Make sure we have all the information we need
	let name = req.query.name;
	let description = req.query.description;
	let owner = req.query.owner;
	let dueDate = req.query.dueDate;

	if(name === undefined || description === undefined || owner === undefined || dueDate === undefined) {
		return res.status(400)
				  .json({error: "Does not include requred information. Requires name: String, description: String, owner: ObjectId, dueDate: Date"});
	}

	// Otherwise, create it and return confirmation
	await Task.create({
		name: name,
		description: description,
		owner: owner,
		dueDate: dueDate
	});

	res.json({message: "Task created"});
});

// Create a new task
taskapi.delete('/deleteTask/:taskID', async (req, res) => {
	let taskID = req.params.taskID;

	// Handle the task not existing
	let exists = await Task.findById(taskID).exec();
	if(exists === null) {
		return res.status(404)
				  .json({error: "Task does not exist"});
	}

	// Otherwise, delete it and return confirmation
	await Task.findByIdAndDelete(taskID);

	res.json({message: "Task deleted"});
});
