const router = require("express").Router();
const authController = require("../controllers/auth.js");

router.post("/login", authController.login);
router.get("/logout", authController.checkLogin, authController.logout);

module.exports = router;