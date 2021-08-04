"use strict";
var express = require('express');
var app = express();
const jwt = require('jsonwebtoken');
const unless = require('express-unless');
const bcrypt = require('bcrypt');
const cors = require('cors');
const service = require('./service');
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ? process.env.PORT : 3000;


app.listen(3000, function () {
 console.log('La api esta escuchando en el puerto 3000 pa');
});
