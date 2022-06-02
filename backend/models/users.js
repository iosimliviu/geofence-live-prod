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
      lat: DataTypes.DECIMAL(8, 6),
      lng: DataTypes.DECIMAL(9, 6),
      registeredAt: "DATETIME",
      lastLogin: "DATETIME"
    })
};