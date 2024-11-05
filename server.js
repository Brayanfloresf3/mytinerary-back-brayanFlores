import express from "express";
import "dotenv/config.js";
import "./config/dataBase.js";
import cors from "cors";
import morgan from "morgan";
import notFoundHandler from "./middlewares/not_found_handler.js";
import errorHandler from "./middlewares/error_handler.js";
import indexRouter from "./router/index.js";

const server = express();

// Middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routers
server.use("/api", indexRouter);

//My Middlewares
server.use(notFoundHandler);
server.use(errorHandler);

const PORT = process.env.PORT || 8080;

server 
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (error) => {
    console.log(`Error en el servidor: ${error}`);
  });

  