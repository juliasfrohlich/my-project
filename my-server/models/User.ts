import mongoose from 'mongoose';
import UserEntity from '../entities/User';

const Schema = mongoose.Schema;

const User = new Schema (UserEntity)

export default mongoose.model('User', User)