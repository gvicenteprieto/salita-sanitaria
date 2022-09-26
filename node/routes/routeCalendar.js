import express from "express";
import {
    createevent,
    getEvents
} from "../controllers/calendarController.js";

const routeCalendar = express.Router();

routeCalendar.post("/", createevent);
routeCalendar.get("/", getEvents);

export default routeCalendar;

