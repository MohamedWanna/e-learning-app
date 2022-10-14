const { body, validationResult } = require('express-validator');

const registerRules = ()=>[
    body('fullName',"fullName is required").notEmpty(),
    body('email',"email is not valid").isEmail(),
    body('password',"password must be at least 6 characters long").isLength({ min: 6, max: 20 }),
]

const loginRules = () =>[    
body('email',"email is not valid").isEmail(),
body('password',"Password confirmation is incorrect").isLength({ min: 6, max: 20 })]

const validator = (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(customError(errors.array()));
    }else next()
}
const customError = (errorsArray) =>
    errorsArray.map((err) => ({ msg: err.msg }));

module.exports = {registerRules, loginRules, validator }