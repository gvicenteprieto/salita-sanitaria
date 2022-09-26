import Event from "../models/Event.js";
import moment from "moment";
export const createevent = async (req, res) => {
  try {
    // const event = new Event(req.body);
    // await event.save();


    const event = await Event.create({
      title: req.body.title,
      start: req.body.start,
      //end: start,
    })
    //console.log(event)
    res.json( event );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    // const events = await Event.find({
    //  start: { $gte: moment(req.query.start).toDate() },
    //  // end: start,
    // });
    
    
    const events = await Event.findAll();
    //console.log(events)
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
