import ErrorHandler from "../middlewares/error.js";
import { Appointment } from "../models/appointment.js";

const send_appointment = async (req, res, next) => {
  const { name, email, phone, concern, date, time } = req.body;
  if (!name || !email || !phone || !concern) {
    return next(new ErrorHandler("Please Fill Full Appointment Form!", 400));
  }

  try {
    await Appointment.create({ name, email, phone, concern, date, time });
    res.status(201).json({
      success: true,
      message: "Appointment Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export default send_appointment;
