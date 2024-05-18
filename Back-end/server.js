import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./Routes/user.routes.js";

import connectToMongoDb from "./db/connectToMongoDB.js";
import { app, server } from "./Socket/socket.js";




app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 7000;

const __dirname = path.resolve();

dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "Front-end/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Front-end", "dist", "index.html"));
})

server.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server is listening on ${PORT}`);
});                 