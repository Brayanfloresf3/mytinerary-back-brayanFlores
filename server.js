import express from 'express'; 
import "dotenv/config.js";
import "./config/dataBase.js";
import cors from 'cors';
import morgan from 'morgan';
import router from './router/cities.js';

const server = express();
 
// Middlewares (en este orden)
server.use(cors())
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Endpoint de prueba
server.get('/test', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

// Routers
server.use('/api/cities', router);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {  
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  console.error(`Server error: ${err}`);
}); 