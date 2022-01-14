require('dotenv').config();

const express = require('express');
const router = require('./router');

const app = express();

const port = process.env.PORT || 8080;
app.use(express.static('public'));
app.set ('view engine' , 'ejs');
app.set('views','./views');
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.listen(port, _ => {console.log(`http://localhost:${port}`)});