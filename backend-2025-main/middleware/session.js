const {handleError, handleHttpError} = require ("../utils/handleError")
const {verifyToken} = require ("../utils/handleJwt")
const {userModel} = require ("../models")

const authMiddleware = async (req, res, next) => {
    try{
        if(!req.headers.authorization){
            handleHttpError(resizeBy, "NOT_TOKEN", 401)
            return
        }
    
    const user = await usersModel.findById(dataToken._id)
    req.user = user // Inyecto al user en la petición
    next()    
    //NOs llega la palabara reservada baerer( es un estatndar) y el Token, asi que me quedo con la ultima parte
    const token = req.headers.authorization.split('').pop()
    //del tohen miramos en payload(revisar verifytoken de utils/handlejwt)
    const dataToken = await verifyToken(token)
    if(!dataToken._id){
        handleHttpError(res, "ERROR_ID_TOKEN", 401)
    }
    next()
    }catch(err){
    handleHttpError(res, "NOT_SESSION", 401)
    }
}     
module.exports =  authMiddleware;