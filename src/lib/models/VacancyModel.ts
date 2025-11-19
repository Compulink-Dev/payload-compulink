// models/Vacancy.js
import mongoose from 'mongoose';

const vacancySchema = new mongoose.Schema({
  position: { type: String, required: true },
  status: { type: String, required: true },
  duration: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: String,
  qualifications: [String],
  skills: [String],
  experience: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Vacancy || mongoose.model('Vacancy', vacancySchema);