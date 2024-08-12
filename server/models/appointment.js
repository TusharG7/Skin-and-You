import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [40, "Name cannot exceed 40 Characters."],
  },
  concern: {
    type: String,
    required: true,
    minLength: [5, "Concern must be of at least 3 Characters."],
    maxLength: [1080, "Concern cannot exceed 1080 Characters."],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 Digits."],
    maxLength: [10, "Phone number must contain 10 Digits."],
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
