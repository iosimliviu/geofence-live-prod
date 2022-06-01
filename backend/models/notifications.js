module.exports = (sequelize, DataTypes) => {
    return sequelize.define("notifications", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      notifyText: DataTypes.TEXT
    });
  };