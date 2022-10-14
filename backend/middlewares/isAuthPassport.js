const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userModel = require("../models/userModel")
const passport = require('passport');
    var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;
passport.initialize();

passport.use(
    new JwtStrategy(
        opts,
        async(decoded,done)=>{
            try {
                const user = await userModel.findById(decoded._id).select("-password")
                if (!user) {
                done(null,false)
                }
                done (null,user)
            } catch (error) {
            console.log(error)
            done(error,false)
            }
        }
    )
);

module.exports = isAuthPassport = () => passport.authenticate("jwt", {session:false});