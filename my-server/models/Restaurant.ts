import mongoose from 'mongoose';
import RestaurantEntity from '../entities/Restaurant';

const Schema = mongoose.Schema;

const Restaurant = new Schema (RestaurantEntity)

export default mongoose.model('Restaurant', Restaurant)