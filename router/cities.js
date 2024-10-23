import { Router } from 'express';
import { getAllCities, getCityById } from '../controllers/cities/read.js';
import createCity from '../controllers/cities/create.js';
import badRequestHandler from '../middlewares/bad_request_handler.js';

const router = Router();


const requiredFields = ['name', 'photo', 'country', 'continent', 'description', 'languages'];

// Rutas
router.get('/', getAllCities);
router.get('/:id', getCityById);

router.post('/create', badRequestHandler(requiredFields), createCity);

export default router;
