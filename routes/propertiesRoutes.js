import { admin } from '../controllers/propertiesController.js' 

import express from "express"
const router = express.Router()

router.get('/myProperties', admin)


export default router
