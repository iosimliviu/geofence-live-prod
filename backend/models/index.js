const sequelize = require("./database.js");  
const User = sequelize.import("./users.js"); 
const UserProject = sequelize.import("./usersProjects.js")
const Project = sequelize.import("./projects.js");
const Polygon = sequelize.import("./polygons.js");
const Path = sequelize.import("./paths.js");
const Notification = sequelize.import("./notifications.js");

User.hasMany(UserProject, { onDelete: "cascade", hooks: "true" });
Project.hasMany(UserProject, { onDelete: "cascade", hooks: "true" });
Project.hasMany(Polygon, { onDelete: "cascade", hooks: "true" });
Polygon.hasMany(Path);
Polygon.hasMany(Notification);

sequelize.sync().then(() => {
  console.log("Tables and database is ok");
});

module.exports = {
  sequelize,
  User,
  UserProject,
  Project,
  Polygon,
  Path,
  Notification
};