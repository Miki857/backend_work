const { getAll, createUser, getOne, destroy, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

//STATIC ROUTES:
userRouter.route("/")
		.get(getAll)
        .post(createUser);

//DINAMIC ROUTES:
userRouter.route("/:id")
        .get(getOne)
        .delete(destroy)
        .put(update);

module.exports = userRouter;