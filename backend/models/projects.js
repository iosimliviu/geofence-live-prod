module.exports = (sequelize, DataTypes) => {
    return sequelize.define("projects", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      zoom: DataTypes.INTEGER,
      name: DataTypes.STRING,
      centerLat: DataTypes.DECIMAL(8, 6),
      centerLng: DataTypes.DECIMAL(9, 6)
    });
  };