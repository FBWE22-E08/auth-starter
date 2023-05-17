import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

//import routes
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';

//loads .env file contents into process.env (environment variables)
dotenv.config();

const app = express();

//allows us to parse json information from http body to req.body 
app.use(express.json());

//connecting to the database
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

//registering routes
app.use('/api/users', userRoutes);  
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);

//listening for requests on port 3001
app.listen(3001, (req, res) => {
    console.log("Server is listening for HTTP requests on port 3001");
})