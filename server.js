const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const apiRouter = require('./routers/router_api');
const {connectDB} = require('./data/mongoStorage');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/api', apiRouter);
app.use(express.urlencoded({ extended: true }));
connectDB();
app.listen(port, (error) => {
  if (error) {
    console.error('Error starting the server:', error);
  } else {
    console.log(`Server is running on http://localhost:${port}`);
  }
});