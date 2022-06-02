const router = require("express").Router();
const userController = require("../controllers/users.js");

router.get("/:id", userController.getUser);
router.post("/email/", userController.getUserByEmail);
router.get("/", userController.getAllUsers);
router.post("/register", userController.createUser);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);

module.exports = router;