const router = require("express").Router();
const projectController = require("../controllers/projects.js");

router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.updateProject);
router.post("/", projectController.createProject);
router.delete("/:id", projectController.deleteProject);

module.exports = router;