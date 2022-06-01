module.exports = (sequelize, DataTypes) => {
    return sequelize.define("polygons", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        strokeColor: DataTypes.STRING,
        fillColor: DataTypes.STRING,
        fillOpacity: DataTypes.FLOAT,
    });
};