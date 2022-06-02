const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const dbReset = require("../services/databaseReset.js");
const userRouter = require("./users");
const projectRouter = require("./projects");
const polygonRouter = require("./polygons.js")
const notificationRouter = require("./notifications.js")
const usersProjects = require("./usersProjects.js")

router.use("/auth", authRouter);
router.get("/reset", dbReset.databaseReset);
router.use("/users", userRouter);
router.use("/projects", projectRouter);
router.use("/polygons", polygonRouter);
router.use("/notifications", notificationRouter);
router.use("/usesProjects", usersProjects)

module.exports = router;