const verifyToken=require('../middlewares/TokenVerification');
const VerifyTokenAuthorization = (req, res, next) => {
    try{
        verifyToken(req, res, async () => {
         
              if(req.user._id!==req.params.id && !req.user.isAdmin){
                     res.status(403).send('You are not authorized');
                 }
                    else{
                        next();
                    }

         }
         );
    }
    catch(err){
        res.status(403).send(err);
    }
}
module.exports = VerifyTokenAuthorization;