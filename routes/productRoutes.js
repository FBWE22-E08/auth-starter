import express from 'express';

import { createProduct, listProducts } from '../controllers/productController.js';

const router = express.Router();

//GET:: http://localhost:3001/api/products/list
router.get('/list', listProducts)
//create a new product, inser a new product into our products collection
//POST:: http://localhost:3001/api/products/create 
//EXAMPLE JSON - BODY
// {
// 	"productName":"Cool sunglasses",
// 	"productDescription":"Have fun in the sun.",
// 	"price":75
// }
router.post('/create', createProduct)

export default router;