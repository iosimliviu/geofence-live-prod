module.exports = (sequelize, DataTypes) => {
    return sequelize.define("paths", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lat: DataTypes.DECIMAL(8, 6),
      lng: DataTypes.DECIMAL(9, 6)
    });
  };