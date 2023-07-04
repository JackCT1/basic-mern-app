import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

CONNECTION_URI = process.env.MONGO_URI;
PORT = process.env.PORT || 3000;
