const router = require("express").Router();
const polygonController = require("../controllers/polygons.js");

router.post("/:projectId", polygonController.createPolygon);
router.delete("/:id", polygonController.deletePolygon);
router.get("/paths/:polygon_id", polygonController.getAllPathsForPolygon);
router.get("/:project_id", polygonController.getAllPolygonsInProject);

module.exports = router;

