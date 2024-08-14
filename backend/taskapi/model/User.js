import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

UserSchema.pre('save', async function(next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, saltRounds);
	}
	next();
});

UserSchema.methods.checkPassword = async function(password) {
	return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
