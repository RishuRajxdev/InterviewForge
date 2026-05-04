const express = require("express");
const app = express();
const cookieParser= require('cookie-parser')
app.use(express.json());
const authRouter = require("../src/routes/auth.routes.js")
app.use(cookieParser())
app.use('/api/auth',authRouter)


module.exports = app;
