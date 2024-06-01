const catchError = require('../utils/catchError');
const User = require('../models/User');

//GET ALL:
const getAll = catchError(async(req, res) => {
    // Operaciones...
    let result = await User.findAll();
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

//INSERT:
const createUser = catchError(async(req, res) => {
    const data = req.body;
    const user = await User.create(data);
    return res.status(201).json(user);
});

//GET ONE:
const getOne = catchError(async(req, res) => {
    // Operaciones...
    let {id} = req.params;
    let result = await User.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

//DELETE:
const destroy = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await User.destroy({ where: { id: id } });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
})

//UPDATE:
const update = catchError(async (req, res) => { 
    const {id} = req.params;
    const result = await User.update(
        req.body,
        {where: {id:id}, returning: true}
    );
    if(result[0] == 0) return res.sendStatus(404);
    return res.json(result);
});

module.exports = {
    getAll,
    createUser,
    getOne,
    destroy,
    update
}