const customHeader = (req, res ,next) =>{
    try{
        const apikey = req.headers.api_key;
        if(apikey == 'api-piblica-123'){
            next()
        }else{
            res.status(403).send("api key no es correcto")
        }
    }catch(err) {
        res.status.send(err)
    }
}
module.exports = customHeader
