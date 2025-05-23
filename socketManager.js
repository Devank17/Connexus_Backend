import { Server } from "socket.io";

export const connectToSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["*"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("user connected", socket.id);

    socket.on("message", (msg) => {
      console.log(msg);
      io.emit("message", msg);
    });
  });

  return io;
};
