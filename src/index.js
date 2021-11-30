const express =require('express');


const productcontroller = require('./controllers/product.controller')
const app =express();
app.use(express.json());
app.use("/products",productcontroller)

module.exports = app;