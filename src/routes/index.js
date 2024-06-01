const express = require('express');
const router = express.Router();

//Importing Routers:
const userRouter = require('./user.router')

//Set them here:
router.use("/users", userRouter);

module.exports = router;