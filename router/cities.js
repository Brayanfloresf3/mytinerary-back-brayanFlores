import { Router } from 'express'
import { getAllCities, getCityById } from '../controllers/cities/read.js'
import createCity from '../controllers/cities/create.js'

const router = Router()

router.get('/', getAllCities)
router.get('/:id', getCityById)
router.post('/create', createCity)

export default router