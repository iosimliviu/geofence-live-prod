module.exports = (sequelize, DataTypes) => {
    return sequelize.define("users", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      registeredAt: "DATETIME",
      lastLogin: "DATETIME"
    })
};