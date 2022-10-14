const express = require('express')
const { signUp, signIn, getAuthUser, getAllUsers } = require('../controllers/userControllers')
const { registerRules, validator, loginRules } = require('../middlewares/bodyValidator')
const isAdmin = require('../middlewares/isAdmin')
const isAuthPassport = require('../middlewares/isAuthPassport')
const router= express.Router()

/**
 * @param POST /user/signUp
 * @description register user
 * @access PUBLIC
 */
router.post("/signUp",registerRules(),validator,signUp)

/**
 * @param POST /user/signIn
 * @description register user
 * @access PUBLIC
 */
router.post("/signIn",loginRules(),validator,signIn)

/**
 * @param GET /user/current
 * @description get auth user
 * @access PRIVATE
 */
router.get("/current", isAuthPassport() ,getAuthUser)

/**
 * @param GET /user/all
 * @description get all users
 * @access PRIVATE ,Authorizd to Admin
 */
router.get("/all",isAuthPassport(),isAdmin,getAllUsers)

module.exports= router