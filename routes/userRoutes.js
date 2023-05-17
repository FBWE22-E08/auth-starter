import express from 'express';
import { createUser, listUsers } from '../controllers/userController.js';

const router = express.Router();

//GET:: http://localhost:3001/api/users/list
router.get('/list', listUsers)
//POST:: http://localhost:3001/api/users/create 
//EXAMPLE JSON - BODY
// {
// 	"firstName": "Mark",
// 	"lastName": "Test",
// 	"userName": "Mark123",
// 	"email": "mark.test@testing.com"
// }
router.post('/create',createUser);

export default router;