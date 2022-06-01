module.exports = (sequelize, DataTypes) => {
    return sequelize.define("usersProjects", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    });
  };