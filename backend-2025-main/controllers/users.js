const UserModel = require('../models/users.js')
const {handleHttpError} = require ('../utils/handleError.js')
const {matchedData} = require('express-validator')

const getItems = async (req, res) => {
    console.log(req);
    const data = await UserModel.find();
    res.json(data);   
}

const createItem = async (req, res) => {
    try{
        req.body
        const body = matchedData (req)
        const data = await tracksModel.create(body)
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, 'Error_CREATE_ITEMS')
    }
    
}

const updateItem =  async (req, res) => {
    
    const email = req.params.email;
    const data = await UserModel.findOneAndReplace(
        {email}, 
        req.body, {returnDocument: 'after'});
    res.json(data)
}

const deleteItem = async (req, res) => {
    const data = await UserModel.findOneAndDelete({email: req.params.email})
    res.json(data)
}

const getItem = async ({req, res}) => {
    const data = await UserModel.findOne(
        {email});
    res.json(data)
}


module.exports = {getItem, getItems, updateItem, createItem, deleteItem}