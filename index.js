import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import movieRoutes from "./routes/movieRoutes.js";


app.use(express.json());

app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 5000;
const env = process.env.NODE_ENV || "development";

await mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));
app.listen(PORT, () => console.log(`Server running in ${env} mode on port ${PORT}`));