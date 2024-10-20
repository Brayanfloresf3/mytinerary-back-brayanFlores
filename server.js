import express from 'express'; 
import "dotenv/config.js";
import "./config/dataBase.js";
import cors from 'cors';
import morgan from 'morgan'; 

const server = express();
const PORT = process.env.PORT || 3000;
const ready = () => console.log("Server ready on port", PORT); 

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routers


server.listen(PORT, ready);