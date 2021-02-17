const express =require ("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.login);

router.get("/register", userController.register);

router.post("/register", userController.processRegister);

module.exports=router;