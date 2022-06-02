const router = require("express").Router();
const userProjectController = require("../controllers/usersProjects.js");

router.get("/:user_id", userProjectController.getUserProjectsForUser);
router.post("/", userProjectController.createUserProject);
router.get("/", userProjectController.getAllUserProjects);

module.exports = router;