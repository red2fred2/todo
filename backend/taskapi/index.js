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
taskapi.get('/:userID/tasks', async (req, res) => {
	let userID = req.params.userID;

	// Handle the user not existing
	let existingDocuments = await User.exists({_id: userID}).exec();
	if(existingDocuments === null) {
		return res.status(404)
				  .json({error: "User does not exist"});
	}

	// Otherwise, return the tasks
	let result = await Task.find({owner: userID}).exec();

	res.json(result);
});
