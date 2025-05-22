import express from "express";
import {} from "socket.io";
import { createServer } from "http";
import { connectToSocket } from "./socketManager.js";
import cors from "cors"
const PORT = 8080


const app = express();
const server = createServer(app)
const io = connectToSocket(server);
app.use(cors())



app.get("/", (req, res) => {
  res.send({ message: "Hey there! This is home page" });
});

server.listen(PORT, () => {
  console.log(`App is listening on Port : ${PORT}`);
});
