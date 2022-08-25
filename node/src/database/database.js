import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import logger from "../utils/loggers.js";

const mongoDB_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1/test-CRUD"

(async () => {
  try {
    const db = await mongoose.connect(mongoDB_URI);
    logger.info(
      "Conectado a mongoDB " +
        db.connection.host +
        ":" +
        db.connection.port +
        "/" +
        db.connection.name
    );
  } catch (error) {
    logger.error(error);
  }
})();