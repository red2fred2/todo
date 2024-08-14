import bcrypt from 'bcrypt';
import express from 'express';
import mongoose from 'mongoose';
import Task from './model/Task.js';
import User from './model/User.js';

await mongoose.connect('mongodb://127.0.0.1/todo');
//66bc462fe7c703c393ce9c88

// await Task.create({name: "task", description: "This is a thing that I need to do at some point", dueDate: Date.now()});

await Task.deleteMany({name: "task"});

// mongoose.disconnect();

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
	let result = await Task.find({name: "task"}).exec();

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
