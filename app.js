const express = require('express');
const { dbConnection } = require('./src/database/dbConnection');
const app = express()
 header("Access-Control-Allow-Origin: *");
require('dotenv').config({path:"./config/.env"})
const port = process.env.PORT;
var morgan = require('morgan')
const baseUrl = process.env.BASEURL;
app.use(express.json());
app.use('categories',require('./src/components/category/category.api'));
app.use(`${baseUrl}/auth`,require('./src/components/auth/auth.api'));
if(process.env.NODE_ENV=="development"){

    app.use(morgan('dev'))
}

dbConnection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
