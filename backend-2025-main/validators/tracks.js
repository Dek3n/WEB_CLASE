const {check} =require ("express-validator")
const validationResults = require ("../utils/handleValidator")

const validatorCreateItem =[
    check("name").exists().notEmpty(),//.isLenght(min:5, max:90)
    (req, res, next)=> validationResults(req, res, next)
]

const validatorGetItem =[
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
]
module.exports = {validatorCreateItem, validatorGetItem}