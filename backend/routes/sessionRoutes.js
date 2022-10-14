const express=require('express')
const upload = require("../utils/multer")
const { addSession, getSessions, getOneSession, deleteSession, updateSession } = require('../controllers/sessionControllers')
const router=express.Router()
/**
 * @param POST /product/addSession
 * @description add Session
 * @access PRIVATE ,Authorizd to Admin
 */
//add new Session
router.post("/addSession",upload("sessions").single('file'),addSession)

/**
 * @param GET /session
 * @description Get all sessions
 * @access PUblic
 */
router.get("/",getSessions)

/**
 * @param GET /session/:id
 * @description get session by Id
 * @access Public
 */
router.get("/:id",getOneSession)

/**
 * @params DELETE /session/:id
 * @description delete a session from the database
 * @access PRIVATE ,Authorizd to Admin
 */
router.delete("/:id",deleteSession)

/**
 * @param PUT /session/update/:id
 * @description update session
 * @access PRIvate for admin
 */
router.put("/:id",upload("sessions").single("file"),updateSession)



module.exports=router