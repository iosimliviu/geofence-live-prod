const router = require("express").Router();
const notificationController = require("../controllers/notifications.js");

router.post("/", notificationController.createNotification);
router.put("/:id", notificationController.updateNotification);
router.get("/", notificationController.getAllNotifications);
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;