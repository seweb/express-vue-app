const express = require('express');
const dotenv = require('dotenv')
const logger = require('./middleware/logger')
const morgan = require('morgan')
const connectDB = require('./config/db')


dotenv.config({ path: './config/config.env' })

connectDB();

const products = require('./api/routes/products')

const app = express();

//Body parser
app.use(express.json())

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//cors
var cors = require('cors')

if (process.env.NODE_ENV !== 'production') {
   app.use(cors())
}

//app.use(logger)

app.use('/api/v1/products', products)


const PORT = process.env.PORT || 3000;

const server = app.listen(
  PORT, 
  console.log(`server running in ${process.env.NODE_ENV}`))

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1))
})