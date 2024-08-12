import express from "express";
import send_appointment from "../controller/appointment.js";

const router = express.Router();

router.post("/send", send_appointment);

export default router;
