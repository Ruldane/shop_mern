import express from 'express'
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import colors from 'colors'
import productRoutes from "./routes/productRoutes.js";
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";

//  use .env file
dotenv.config();
// use db.js file
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running')
})

// create routes product
app.use('/api/products', productRoutes)

//using middleware for custom error
app.use(errorHandler)
//using middleware for custom error
app.use(notFound)

const PORT = process.env.PORT || 5000


app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);